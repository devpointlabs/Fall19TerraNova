class Cabin < ApplicationRecord
    has_many :bookings, dependent: :destroy
    has_many :users, through: :bookings
    has_many :payments, through: :bookings
    def self.avail_cabins_model(params)
      cabins_info = []
      Cabin.all.each do |c|          
        grandWantedDates = (params[:dates].first.to_date..params[:dates].second.to_date).to_a
        price_total = c.price 
        grandTakenArray = [] 
        availableDates = [] 
        takenArray = [] 
        grandPriceArray = []
        dateAndPriceEventHash = {}
        cabinSpecificDates = []
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
      
        Priceevent.select(:start_date, :end_date, :id).where("cabin_id IS null AND start_date IS NOT null").each {|date_pair| grandPriceArray << {id: date_pair.id, dates: (date_pair.start_date..date_pair.end_date).to_a }}
              
          grandPriceArray.each do |i|
            i[:dates].each do |date|
              d = date.to_s
              if grandWantedDates.include?(date)
                if dateAndPriceEventHash[d]
                  dateAndPriceEventHash[d] << i[:id]
                else
                  dateAndPriceEventHash[d] = [i[:id]]
                end                  
              end
            end
          end
          
    
        Priceevent.select(:start_date, :end_date, :id).where(cabin_id: c.id).each {|date_pair| cabinSpecificDates << {id: date_pair.id, dates: (date_pair.start_date..date_pair.end_date).to_a }}
        
          cabinSpecificDates.each do |i|
            i[:dates].each do |date|
              d = date.to_s
              if grandWantedDates.include?(date)
                if dateAndPriceEventHash[d]
                  dateAndPriceEventHash[d] << i[:id]
                else
                  dateAndPriceEventHash[d] = [i[:id]]
                end                  
              end
            end
          end
          
          Priceevent.select(:id, :start_date, :end_date).where("recurring IS true AND start_date IS NOT null").each do |i| 
            
            (i[:start_date]..i[:end_date]).to_a.each do |date| 
              d = date.strftime("%m/%d")
              grandWantedDates.each do |f|
                if f.strftime("%m/%d") == d
                  if dateAndPriceEventHash.include?(f.to_s)
                    if dateAndPriceEventHash[f.to_s].exclude?(i[:id])
                      dateAndPriceEventHash[f.to_s] << i[:id]
                    else 
                    end
                  else
                    dateAndPriceEventHash[f.to_s] = [i[:id]]
                  end 
                end
              end
            end
          end
          dateAndPriceEventHash.each do |date, arr|
            arrMult = []
            arrAdd = []
            k = date.to_date.wday 
            if k == 5 || k == 6 || k == 0
              arr.unshift(Priceevent.select(:id).where('start_date IS null').first[:id])
            end
            arr.each do |id|
              if Priceevent.find(id).multiplier
                arrMult << Priceevent.find(id).multiplier.to_f
              elsif Priceevent.find(id).adder
                arrAdd << Priceevent.find(id).adder.to_f
              end
            end
            arrAdd.each {|n| price_total += n }
            arrMult.each {|m| price_total *= m}
          end
          
          cabins_info << {cabin_id: c.id, 
            cabin_details: {
              unavailable_dates: takenArray,
              available_dates: availableDates, 
              price_total: price_total, 
              numberofNights: grandWantedDates.length, 
              aveNightlyRate: price_total/grandWantedDates.length,
              name: c.name,
              description: c.description
            }}
        end
        return cabins_info
    end
      
    def self.single_cabin_avail(params)
        
        grandWantedDates = (params[:dates].first.to_date..params[:dates].second.to_date).to_a
        price_total = Cabin.find(params[:id]).price 
        grandTakenArray = [] 
        availableDates = [] 
        takenArray = [] 
        grandPriceArray = []
        dateAndPriceEventHash = {}
        cabinSpecificDates = []
        Booking.select(:start_date, :end_date).where(cabin_id: params[:id]).each {|date_pair| (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} }
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
          # for all cabins
        Priceevent.select(:start_date, :end_date, :id).where("cabin_id IS null AND start_date IS NOT null").each {|date_pair| grandPriceArray << {id: date_pair.id, dates: (date_pair.start_date..date_pair.end_date).to_a }}
              
          grandPriceArray.each do |i|
            i[:dates].each do |date|
              d = date.to_s
              if grandWantedDates.include?(date)
                if dateAndPriceEventHash[d]
                  dateAndPriceEventHash[d] << i[:id]
                else
                  dateAndPriceEventHash[d] = [i[:id]]
                end                  
              end
            end
          end
          
        Priceevent.select(:start_date, :end_date, :id).where(cabin_id: params[:id]).each {|date_pair| cabinSpecificDates << {id: date_pair.id, dates: (date_pair.start_date..date_pair.end_date).to_a }}
        
          cabinSpecificDates.each do |i|
            i[:dates].each do |date|
              d = date.to_s
              if grandWantedDates.include?(date)
                if dateAndPriceEventHash[d]
                  dateAndPriceEventHash[d] << i[:id]
                else
                  dateAndPriceEventHash[d] = [i[:id]]
                end                  
              end
            end
          end
          # for all cabins of events past
        Priceevent.select(:id, :start_date, :end_date).where("recurring IS true AND start_date IS NOT null").each do |i| 
          
          (i[:start_date]..i[:end_date]).to_a.each do |date| 
            d = date.strftime("%m/%d")
              grandWantedDates.each do |f|
                if f.strftime("%m/%d") == d
                  if dateAndPriceEventHash.include?(f.to_s)
                    if dateAndPriceEventHash[f.to_s].exclude?(i[:id])
                      dateAndPriceEventHash[f.to_s] << i[:id]
                    else 
                    end
                  else
                    dateAndPriceEventHash[f.to_s] = [i[:id]]
                  end 
                end
              end
          end
        end
        dateAndPriceEventHash.each do |date, arr|
          arrMult = []
          arrAdd = []
          k = date.to_date.wday 
          if k == 5 || k == 6 || k == 0
            arr.unshift(Priceevent.select(:id).where('start_date IS null').first[:id])
          end
          arr.each do |id|
            if Priceevent.find(id).multiplier
              arrMult << Priceevent.find(id).multiplier.to_f
            elsif Priceevent.find(id).adder
              arrAdd << Priceevent.find(id).adder.to_f
            end
          end
          arrAdd.each {|n| price_total += n }
          arrMult.each {|m| price_total *= m}
        end
        return {cabin_id: params[:id], 
                cabin_details: {
                  unavailable_dates: takenArray, 
                  available_dates: availableDates, 
                  price_total: price_total, 
                  numberofNights: grandWantedDates.length, 
                  aveNightlyRate: price_total/grandWantedDates.length,
                  name: Cabin.find(params[:id]).name,
                  description: Cabin.find(params[:id]).description
                }}
    end
  end
  