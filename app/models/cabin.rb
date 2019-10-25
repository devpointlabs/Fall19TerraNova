class Cabin < ApplicationRecord
  has_many :bookings, dependent: :destroy

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


    # ----------------- DISCOUNTS --------------------- 
    
    discArr = []
    
    # NON-REFUNDABLE
    
    nonref = Discount.find_by(name: "Nonrefundable")
    discArr << nonref
    
    # STAY LENGTH 
    
    if grandWantedDates.length > 21
      threeweek = Discount.find_by(name: "Twenty-One Plus Days")
      discArr << threeweek
    elsif grandWantedDates.length > 14
      twoweek = Discount.find_by(name: "Fourteen Plus Days")
      discArr << twoweek
    elsif grandWantedDates.length > 7
      oneweek = Discount.find_by(name: "Seven Plus Days")
      discArr << oneweek
    end

    
    #? IATA for travel agents? tbd
    # --------------------------------------------




    Priceevent.select(:start_date, :end_date, :id, :multiplier, :adder).where("cabin_id IS null AND start_date IS NOT null AND recurring IS NOT true").each do |date_pair| 
      grandPriceArray << {id: date_pair.id, adder: date_pair.adder, multiplier: date_pair.multiplier, dates: (date_pair.start_date..date_pair.end_date).to_a }
    end

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
      
      

    weekendPE = Priceevent.select(:id, :adder, :multiplier).where("start_date IS null")
    
    Cabin.all.each do |c|  
      price_total = 0
      grandTakenArray = [] 
      availableDates = [] 
      takenArray = [] 
      cabinSpecificDates = []
      cabinDandPeventhash = Marshal.load(Marshal.dump(dateAndPriceEventHash))
      
      Booking.select(:start_date, :end_date).where(cabin_id: c.id).each do |date_pair| 
        (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} 
      end

        grandTakenArray.each do |tdate|
          if grandWantedDates.include?(tdate.to_s)
            takenArray << tdate.to_s
          end
          grandWantedDates.each do |wdate|
            if takenArray.include?(wdate) == false
              availableDates << wdate
            end
          end
        end

        
      Priceevent.select(:start_date, :end_date, :id, :adder, :multiplier).where(cabin_id: c.id).each do |date_pair| 
        cabinSpecificDates << {id: date_pair.id, adder: date_pair.adder, multiplier: date_pair.multiplier, dates: (date_pair.start_date..date_pair.end_date).to_a }
      end
      
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
          datePrice = c.price

          w = date.to_date.wday 
          if w == 5 || w == 6 || w == 0
            if weekendPE.first.multiplier
              value[:multipliers].unshift(weekendPE.first.multiplier) 
            elsif weekendPE.first.adder
              value[:adders].unshift(weekendPE.first.adder) 
            end
          end

          value[:multipliers].each {|m| value[:adders] << (datePrice * m.to_f)}
          value[:adders].each {|n| datePrice += n.to_f }

          price_total += datePrice
        end
        
        if takenArray.length == 0

          discHash = {}

          if params[:discountcode]
            d = Discount.find_by(code: params[:discountcode])
            if d.multiplier
              discHash[d.name] = price_total * (1 - d.multiplier.to_f)
            elsif d.subtractor
              discHash[d.name] = price_total - d.subtractor
            elsif d.set_price
              discHash[d.name] = d.set_price * grandWantedDates.length
            end
          else 
            discArr.each do |d|
              if d.multiplier
                discHash[d.name] = price_total * (1 - d.multiplier.to_f)
              elsif d.subtractor
                discHash[d.name] = price_total - d.subtractor
              end
            end
            discHash["reg"] = price_total
          end
          
          
          a = {id: c.id, cabin_number: c.cabin_number, cabin_letter: c.cabin_letter, cabinPricing: {price_hash: discHash, numberofNights: grandWantedDates.length}}
            
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
          familyCabins << 
             {cabin_number: cabins_info[i][:cabin_number], 
              cabinPricing: 
                {price_hash: {ahash: cabins_info[i][:cabinPricing][:price_hash], bhash: cabins_info[i+1][:cabinPricing][:price_hash]}, 
                 numberofNights: cabins_info[i][:cabinPricing][:numberofNights]}, 
              pair: [cabins_info[i], cabins_info[i+1]]}
        end
      end

      return {familyCabins: familyCabins, aRooms: aRooms, bRooms: bRooms, vip1: vip1, vip2: vip2}
  end

  def self.working
    puts "You got into this file"
  end

  def self.single_cabin_avail(params) # no longer useful.
    
    cabins_info = {}
    familyCabins = [] 
    aRooms = []
    bRooms = []
    vip1 = 0
    vip2 = 0

    grandWantedDates = (params[:dates].first.to_date..params[:dates].second.to_date).to_a
    dateAndPriceEventHash = {}
    grandPriceArray = []


    
    discArr = []
    
    # NON-REFUNDABLE
    
    nonref = Discount.find_by(name: "Nonrefundable")
    discArr << nonref
    
    # STAY LENGTH 
    
    if grandWantedDates.length > 21
      threeweek = Discount.find_by(name: "Twenty-One Plus Days")
      discArr << threeweek
    elsif grandWantedDates.length > 14
      twoweek = Discount.find_by(name: "Fourteen Plus Days")
      discArr << twoweek
    elsif grandWantedDates.length > 7
      oneweek = Discount.find_by(name: "Seven Plus Days")
      discArr << oneweek
    end

    

    Priceevent.select(:start_date, :end_date, :id, :multiplier, :adder).where("cabin_id IS null AND start_date IS NOT null AND recurring IS NOT true").each do |date_pair| 
      grandPriceArray << {id: date_pair.id, adder: date_pair.adder, multiplier: date_pair.multiplier, dates: (date_pair.start_date..date_pair.end_date).to_a }
    end

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
      
      

    weekendPE = Priceevent.select(:id, :adder, :multiplier).where("start_date IS null")
    
    c = Cabin.find_by(id: params[:id])
     
      price_total = 0
      grandTakenArray = [] 
      availableDates = [] 
      takenArray = [] 
      cabinSpecificDates = []
      cabinDandPeventhash = Marshal.load(Marshal.dump(dateAndPriceEventHash))
      
      Booking.select(:start_date, :end_date).where(cabin_id: c.id).each do |date_pair| 
        (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} 
      end

        grandTakenArray.each do |tdate|
          if grandWantedDates.include?(tdate.to_s)
            takenArray << tdate.to_s
          end
          grandWantedDates.each do |wdate|
            if takenArray.include?(wdate) == false
              availableDates << wdate
            end
          end
        end

        
      Priceevent.select(:start_date, :end_date, :id, :adder, :multiplier).where(cabin_id: c.id).each do |date_pair| 
        cabinSpecificDates << {id: date_pair.id, adder: date_pair.adder, multiplier: date_pair.multiplier, dates: (date_pair.start_date..date_pair.end_date).to_a }
      end
      
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
          datePrice = c.price

          w = date.to_date.wday 
          if w == 5 || w == 6 || w == 0
            if weekendPE.first.multiplier
              value[:multipliers].unshift(weekendPE.first.multiplier) 
            elsif weekendPE.first.adder
              value[:adders].unshift(weekendPE.first.adder) 
            end
          end

          value[:multipliers].each {|m| value[:adders] << (datePrice * m.to_f)}
          value[:adders].each {|n| datePrice += n.to_f }

          price_total += datePrice
        end
        
        if takenArray.length == 0

          discHash = {}

          if params[:discountcode]
            d = Discount.find_by(code: params[:discountcode])
            if d.multiplier
              discHash[d.name] = price_total * (1 - d.multiplier.to_f)
            elsif d.subtractor
              discHash[d.name] = price_total - d.subtractor
            elsif d.set_price
              discHash[d.name] = d.set_price * grandWantedDates.length
            end
          else 
            discArr.each do |d|
              if d.multiplier
                discHash[d.name] = price_total * (1 - d.multiplier.to_f)
              elsif d.subtractor
                discHash[d.name] = price_total - d.subtractor
              end
            end
            discHash["reg"] = price_total
          end
          
          cabins_info = {id: c.id, cabin_number: c.cabin_number, cabin_letter: c.cabin_letter, cabinPricing: {price_hash: discHash, numberofNights: grandWantedDates.length}}
          
        end

      return cabins_info
  end

  

  
end
  