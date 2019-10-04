class Api::CabinsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_cabin, only: [:show, :create, :destroy]

  def index # ☑️ finds all cabins. For gallery show page
    render json: Cabin.all 
  end

  def show # ☑️ shows a specific cabin. For individual show page
    render json: @cabin
  end
  
  def create # ☑️ creates a cabin. ADMIN ONLY 
    if current_user.admin == true
      cabin = Cabin.new(cabin_params)
      if cabin.save
        render json: cabin
      else
        render json: {errors: cabin.error}, status: :unprocessable_entity
      end
    else 
      render json: {message: "Authorized access denied. Admin status:  #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end

  def update # ☑️ updates a cabin. ADMIN ONLY.
    if current_user.admin == true
      if @cabin.update(cabin_params)
        render json: @cabin
      else
        render json: {errors: @cabin.error}, status: :unprocessable_entity
      end
    else 
      render json: {message: "Authorized access denied. Admin status: #{current_user.admin ? "Granted" : "Not Granted" }"}    
    end
  end
  
  # Destroy Disabled. See below

  def avail_cabins # ☑️ pass in an array of dates with THIS syntax "2019-10-02"  {params: {dates: ["2019-10-04", "2019-10-06"]}}

    cabin_info = []

    Cabin.all.each do |c|          
      grandWantedDates = (params[:dates].first..params[:dates].second).to_a
      grandTakenArray = [] 
      grandPriceArray = []
      takenArray = [] 
      availableDates = [] 
      dateAndPriceEventHash = {}
      price_total = 0

      Booking.select(:start_date, :end_date).where(cabin_id: c.id).each {|date_pair| (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} }

      Priceevent.select(:start_date, :end_date, :id).where("cabin_id IS null AND start_date IS NOT null").each {|date_pair| grandPriceArray << {id: date_pair.id, dates: (date_pair.start_date..date_pair.end_date).to_a }}

      grandPriceArray.each do |i|
        i[:dates].each do |date|
          d = date.to_s
          if grandWantedDates.include?(d)
            if dateAndPriceEventHash[d]
              dateAndPriceEventHash[d] << i[:id]
            else
              dateAndPriceEventHash[d] = [i[:id]]
            end                  
          end
        end
      end

      
      dateAndPriceEventHash.each do |date, arr|
        arrMult = []
        arrAdd = []
        arr.each do |id|
          if Priceevent.find(id).multiplier
            arrMult << Priceevent.find(id).multiplier.to_f
          elsif Priceevent.find(id).adder
            arrAdd << Priceevent.find(id).adder.to_f
          end
        end
        price_total += c.price 
        arrAdd.each {|n| price_total += n }
        arrMult.each {|m| price_total *= m}
      end
      

      # cabin specific Hike
      # Priceevent.select(:adder).where(cabin_id: c.id)
      # weekend specific Hike
      
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
    
      cabin_info << {cabin_id: c.id, cabin_details: {unavailable_dates: takenArray, available_dates: availableDates, price_total: price_total, numberofNights: grandWantedDates.length, aveNightlyRate: price_total/grandWantedDates.length  }}
    end

    render json: cabin_info
  end

  def single_cabin_availability # ☑️ send 1 cabin id. and pass in an array of dates with THIS syntax "2019-10-02", params[:dates] params[:id] {params: {dates: ["2019-10-04", ...]}, {id: 1}}

    grandWantedDates = params[:dates] 
    grandTakenArray = [] 
    takenArray = []
    availableDates = [] 


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

    render json: {cabin_id: c.id, cabin_details: {unavailable_dates: takenArray, available_dates: availableDates }}
    
  end

  private 

    def set_cabin # ☑️
      @cabin = Cabin.find(params[:id])
    end
    
    def cabin_params # ☑️
      params.require(:cabin).permit(:name, :price, :occupied, :occupancy, :description)
    end

end







  # def destroy #ADIMN ONLY. DONT DO!! If searching for a record where cabin_id doesn't exist thos Booking records WILL break.
  #   if current_user.admin == true
  #     @cabin.destroy
  #     render json: {message: "Cabin Destroyed"}
  #   else 
  #     render json: {message: "Authorized access denied. Admin status:  #{current_user.admin ? "Granted" : "Not Granted" }"}    
  #   end    
  # end











































#   cabin_info = []

#   Cabin.all.each do |c|          
#     grandWantedDates = (params[:dates].first..params[:dates].second).to_a
#     grandTakenArray = [] # list of ALL dates for a cabin that are taken
#     takenArray = [] # list of wanted dates that are UNAVAILABLE # these two will be returned. so i need to take these dates. find the prices for each one. 
#     availableDates = [] # list of wanted dates that ARE available #
#     price_total = 0

#     Booking.select(:start_date, :end_date).where(cabin_id: c.id).each {|date_pair| (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} }
#     #queries for all start and end dates for that cabin_id, then for each pair of start and end dates a range array of dates between the two
#     #(including the start and end dates) is iterated through and stored in a grand array of dates that have already been booked.
#     binding.pry
#     grandTakenArray.each do |tdate|
#       if grandWantedDates.include?(tdate.to_s)
#         # take tdate.to_s and compare it to the list of dates with price hikes. 
#         takenArray << tdate.to_s
#       end
#     end
#     # sorts through all unavailable dates, if one of those dates is one of the wanted dates, it is stored in takenArray

#     grandWantedDates.each do |wdate|
#       if takenArray.include?(wdate) == false
#         availableDates << wdate
#       end
#     end
#     # sorts through all wanted dates, if any of those dates are NOT included that dates is stored in availableDates
  
#     cabin_info << {cabin_id: c.id, cabin_details: {unavailable_dates: takenArray, available_dates: availableDates }}

#     {cabin_id: c.id, cabin_details: {unavailable_dates: takenArray, available_dates: availableDates, price_total: SOMETHING }}
#   end

#   render json: cabin_info
# end

# def single_cabin_availability # ☑️ send 1 cabin id. and pass in an array of dates with THIS syntax "2019-10-02", params[:dates] params[:id] {params: {dates: ["2019-10-04", ...]}, {id: 1}}

#   grandWantedDates = params[:dates] # list of ALL dates for a cabin # ! get this from user side! stuff below is space
#   grandTakenArray = [] # list of ALL dates for a cabin that are taken
#   takenArray = [] # list of wanted dates that are UNAVAILABLE
#   availableDates = [] # list of wanted dates that ARE available

#   Booking.select(:start_date, :end_date).where(cabin_id: params[:id]).each {|date_pair| (date_pair.start_date..date_pair.end_date).each {|d| grandTakenArray << d} }
#   #queries for all start and end dates for that cabin_id, then for each pair of start and end dates a range array of dates between the two
#   #(including the start and end dates) is iterated through and stored in a grand array of dates that have already been booked.

#   grandTakenArray.each do |tdate|
#     if grandWantedDates.include?(tdate.to_s)
#       takenArray << tdate.to_s
#     end
#   end
#   # sorts through all unavailable dates, if one of those dates is one of the wanted dates, it is stored in takenArray

#   grandWantedDates.each do |wdate|
#     if takenArray.include?(wdate) == false
#       availableDates << wdate
#     end
#   end
#   # sorts through all wanted dates, if any of those dates are NOT included that dates is stored in availableDates

#   render json: {cabin_id: c.id, cabin_details: {unavailable_dates: takenArray, available_dates: availableDates }}
