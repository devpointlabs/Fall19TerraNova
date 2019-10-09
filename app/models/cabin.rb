class Cabin < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :users, through: :bookings
  has_many :payments, through: :bookings


  def self.avail_cabins_model(params)

    cabins_info = []
    familyCabins = [] 
    aRooms = []
    bRooms = []
    vip1 = 0
    vip2 = 0

    grandWantedDates = (params[:dates].first.to_date..params[:dates].second.to_date).to_a
    dateAndPriceEventHash = {}
    grandPriceArray = []

    Priceevent.select(:start_date, :end_date, :id, :multiplier, :adder).where("cabin_id IS null AND start_date IS NOT null").each {|date_pair| grandPriceArray << {id: date_pair.id, adder: date_pair.adder, multiplier: date_pair.multiplier, dates: (date_pair.start_date..date_pair.end_date).to_a }}

    grandPriceArray.each do |i|
        i[:dates].each do |date|
          d = date.to_s
          if grandWantedDates.include?(date)
            if dateAndPriceEventHash[d]
            
              if i[:adder]
                dateAndPriceEventHash[d][:adders] << i[:adder]
              elsif i[:multiplier]
                dateAndPriceEventHash[d][:multipliers] << i[:multiplier]
              end

            else
              if i[:adder]
                dateAndPriceEventHash[d] = {adders: [i[:adder]], multipliers: [] }
              elsif i[:multiplier]
                dateAndPriceEventHash[d] = {adders: [], multipliers: [i[:multiplier]] }
              end

            end                  
          end
        end
      end
      

    Priceevent.select(:id, :start_date, :end_date, :adder, :multiplier).where("recurring IS true AND start_date IS NOT null").each do |i| 
        
      (i[:start_date]..i[:end_date]).to_a.each do |date| 
        d = date.strftime("%m/%d")
        grandWantedDates.each do |f|
          if f.strftime("%m/%d") == d
            if dateAndPriceEventHash.include?(f.to_s)              
              if i[:adder]
                dateAndPriceEventHash[f.to_s][:adders] << i[:adder]
              elsif i[:multiplier]
                dateAndPriceEventHash[f.to_s][:multipliers] << i[:multiplier]
              end
            else
              if i[:adder]
                dateAndPriceEventHash[f.to_s] = {adders: [i[:adder]], multipliers: [] }
              elsif i[:multiplier]
                dateAndPriceEventHash[f.to_s] = {adders: [], multipliers: [i[:multiplier]] }
              end
             
            end 
          end
        end
      end
    end

    
    Cabin.all.each do |c|  
      price_total = c.price 
      grandTakenArray = [] 
      availableDates = [] 
      takenArray = [] 
      cabinSpecificDates = []
      cabinDandPeventhash = Marshal.load(Marshal.dump(dateAndPriceEventHash))
      
      
      Booking.select(:start_date, :end_date).where(cabin_id: c.id).each {|date_pair| (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} }

        grandTakenArray.each do |tdate|
          if grandWantedDates.include?(tdate.to_s)
            takenArray << tdate.to_s
          end
        end

        grandWantedDates.each do |wdate|
          if takenArray.include?(wdate) == false
            availableDates << wdate
          end
        end

        
      Priceevent.select(:start_date, :end_date, :id, :adder, :multiplier).where(cabin_id: c.id).each {|date_pair| cabinSpecificDates << {id: date_pair.id, adder: date_pair.adder, multiplier: date_pair.multiplier, dates: (date_pair.start_date..date_pair.end_date).to_a }}
      
        cabinSpecificDates.each do |i|
          i[:dates].each do |date|
            d = date.to_s
            if grandWantedDates.include?(date)
              if cabinDandPeventhash[d]
                if i[:adder]
                  cabinDandPeventhash[d][:adders] << i[:adder]
                elsif i[:multiplier]
                  cabinDandPeventhash[d][:multipliers] << i[:multiplier]
                end
              else
                if i[:adder]
                  cabinDandPeventhash[d] = {adders: [i[:adder]], multipliers: [] }
                elsif i[:multiplier]
                  cabinDandPeventhash[d] = {adders: [], multipliers: [i[:multiplier]] }
                end
              end                  
            end
          end
        end

        cabinDandPeventhash.each do |date, value|
          w = date.to_date.wday 
          if w == 5 || w == 6 || w == 0
            value[:multipliers].unshift(1.05) # This is the weekend priceevent multiplier. 
          end
          value[:adders].each {|n| price_total += n.to_f }
          value[:multipliers].each {|m| price_total *= m.to_f}
        end
        
        if takenArray.length == 0
          
          a = {id: c.id, cabin_number: c.cabin_number, cabin_letter: c.cabin_letter,
          cabinPricing: {
            price_total: price_total, 
            numberofNights: grandWantedDates.length, 
            aveNightlyRate: price_total/grandWantedDates.length,
            }}
            
          cabins_info << a

          case c.cabin_letter
          when "a"
            aRooms << a
          when "VIP1"
            vip1 = a
          when "VIP2"
            vip2 = a
          else
            bRooms << a
          end
        end

      end

      for i in 0..cabins_info.length-2 do 
        if cabins_info[i][:cabin_number] == cabins_info[i+1][:cabin_number]
          familyCabins << {cabin_number: cabins_info[i][:cabin_number], pair: [cabins_info[i], cabins_info[i+1]] }
        end
      end

      return {familyCabins: familyCabins, aRooms: aRooms, bRooms: bRooms, vip1: vip1, vip2: vip2}
  end
   
  

  
end
  # def self.single_cabin_avail(params) # no longer useful.
      
  #     grandWantedDates = (params[:dates].first.to_date..params[:dates].second.to_date).to_a
  #     price_total = Cabin.find(params[:id]).price 
  #     grandTakenArray = [] 
  #     availableDates = [] 
  #     takenArray = [] 
  #     grandPriceArray = []
  #     dateAndPriceEventHash = {}
  #     cabinSpecificDates = []

  #     Booking.select(:start_date, :end_date).where(cabin_id: params[:id]).each {|date_pair| (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} }

  #       grandTakenArray.each do |tdate|
  #         if grandWantedDates.include?(tdate.to_s)
  #           takenArray << tdate.to_s
  #         end
  #       end

  #       grandWantedDates.each do |wdate|
  #         if takenArray.include?(wdate) == false
  #           availableDates << wdate
  #         end
  #       end

  #       # for all cabins
  #     Priceevent.select(:start_date, :end_date, :id).where("cabin_id IS null AND start_date IS NOT null").each {|date_pair| grandPriceArray << {id: date_pair.id, dates: (date_pair.start_date..date_pair.end_date).to_a }}
            
  #       grandPriceArray.each do |i|
  #         i[:dates].each do |date|
  #           d = date.to_s
  #           if grandWantedDates.include?(date)
  #             if dateAndPriceEventHash[d]
  #               dateAndPriceEventHash[d] << i[:id]
  #             else
  #               dateAndPriceEventHash[d] = [i[:id]]
  #             end                  
  #           end
  #         end
  #       end
        
  #     Priceevent.select(:start_date, :end_date, :id).where(cabin_id: params[:id]).each {|date_pair| cabinSpecificDates << {id: date_pair.id, dates: (date_pair.start_date..date_pair.end_date).to_a }}
      
  #       cabinSpecificDates.each do |i|
  #         i[:dates].each do |date|
  #           d = date.to_s
  #           if grandWantedDates.include?(date)
  #             if dateAndPriceEventHash[d]
  #               dateAndPriceEventHash[d] << i[:id]
  #             else
  #               dateAndPriceEventHash[d] = [i[:id]]
  #             end                  
  #           end
  #         end
  #       end

  #       # for all cabins of events past
  #     Priceevent.select(:id, :start_date, :end_date).where("recurring IS true AND start_date IS NOT null").each do |i| 
        
  #       (i[:start_date]..i[:end_date]).to_a.each do |date| 
  #         d = date.strftime("%m/%d")
  #           grandWantedDates.each do |f|
  #             if f.strftime("%m/%d") == d
  #               if dateAndPriceEventHash.include?(f.to_s)
  #                 if dateAndPriceEventHash[f.to_s].exclude?(i[:id])
  #                   dateAndPriceEventHash[f.to_s] << i[:id]
  #                 else 
  #                 end
  #               else
  #                 dateAndPriceEventHash[f.to_s] = [i[:id]]
  #               end 
  #             end
  #           end
  #       end
  #     end
  #     dateAndPriceEventHash.each do |date, arr|
  #       arrMult = []
  #       arrAdd = []
  #       k = date.to_date.wday 
  #       if k == 5 || k == 6 || k == 0
  #         arr.unshift(Priceevent.select(:id).where('start_date IS null').first[:id])
  #       end
  #       arr.each do |id|
  #         if Priceevent.find(id).multiplier
  #           arrMult << Priceevent.find(id).multiplier.to_f
  #         elsif Priceevent.find(id).adder
  #           arrAdd << Priceevent.find(id).adder.to_f
  #         end
  #       end
  #       arrAdd.each {|n| price_total += n }
  #       arrMult.each {|m| price_total *= m}
  #     end
  #     return {cabin_id: params[:id], 
  #             cabin_details: {
  #               unavailable_dates: takenArray, 
  #               available_dates: availableDates, 
  #               price_total: price_total, 
  #               numberofNights: grandWantedDates.length, 
  #               aveNightlyRate: price_total/grandWantedDates.length,
  #               name: Cabin.find(params[:id]).name,
  #               description: Cabin.find(params[:id]).description
  #             }}
  # end


































# Priceevent.select(:id, :start_date, :end_date).where("recurring IS true AND start_date IS NOT null").each do |i| # is each recurring PE
#   # foo = [] # altered gwd array to be dates, not strings
#   # grandWantedDates.each { |w| foo << w.to_date.strftime("%m/%d") }

#   (i[:start_date]..i[:end_date]).to_a.each do |date| # date is a single in a PE array
#     d = date.strftime("%m/%d")

#     grandWantedDates.each do |w|
#       if w.to_date.strftime("%m/%d") == d 
#         dateAndPriceEventHash.each do |key, value|
#           if key.to_date.strftime("%m/%d") == d
#             if value.include?(i[:id])
#             else
#               value << i[:id]
#             end
#           else
#           end
#         end
#       else
#       end
#     end
#     # if foo.first > foo.last
#     #   [(grandWantedDates.first.."12/31").to_a + ("01/01"..grandWantedDates.last).to_a ]
#     #   # then we know that it will cover the new year turn
#     # else
          
#   end
# end



# dateAndPriceEventHash[f.to_s] = [i[:id]]

# create a key value pair in the datepriceeventhash

# dateAndPriceEventHash.each do |key, value| # if they key doenst exist.
#   if key.to_date.strftime("%m/%d") == d
#     if value.include?(i[:id])
#     else
#       value << i[:id]
#     end

#   else
#   end
# end