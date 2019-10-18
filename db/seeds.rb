User.create(email: "test@test.com", password: "password", password_confirmation: "password", first_name: "John", last_name: "Doe", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, country: "USA", cellphone: "8015551234", birthday: "1990-01-01", anniversary: "2010-02-02", admin: false)
User.create(email: "test2@test.com", password: "password", password_confirmation: "password", first_name: "Jane", last_name: "Doe", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, country: "USA", cellphone: "8015551234", birthday: "1990-01-01", anniversary: "2010-02-02", admin: false)
User.count == 2 ? (puts "John and Jane Doe Created") :  (puts "CREATING 2 USERS ERRROR")
a = [1,2,3,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,35,36,37,38,39,50,51,52,53,55,56,57,58,59,60,61,62,63,65,66,67,68,69,70,71,72,73,75]
b = 0
c = 0
d = "a"
116.times do 
  Cabin.create(cabin_number: "#{a[b]}", cabin_letter: "#{d}", price: 125)
  c % 2 != 0 ? (b += 1; d = "a") : (d = "b")
  c += 1
end
Cabin.count == 116 ? (puts "116 Normal Cabins, Every other in Chinese numbers while alternating a and b") : (puts "CREATING 116 CABINS ERRROR")
Cabin.create(cabin_number: "76", cabin_letter: "VIP1", price: 1250)
Cabin.create(cabin_number: "77", cabin_letter: "VIP2", price: 1250)
Cabin.count == 118 ? (puts "2 VIP cabins Created") : (puts "CREATING VIP CABINS ERRROR")
# Booking.create(start_date: "2019-10-01", end_date: "2019-10-03", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 000000, user_id: 1, cabin_id: 5, cabin_type: "A", price: 300, customer_payment_token: " cus_1")
# Booking.create(start_date: "2019-10-01", end_date: "2019-10-04", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 111111, user_id: 1, cabin_id: 1, cabin_type: "Family", price: 300, customer_payment_token: " cus_2")
# Booking.create(start_date: "2019-10-16", end_date: "2019-10-20", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 222222, user_id: 2, cabin_id: 2, cabin_type: "A", price: 300, customer_payment_token: " cus_3")
# Booking.create(start_date: "2019-10-03", end_date: "2019-10-06", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 333333, user_id: 1, cabin_id: 3, cabin_type: "B", price: 300, customer_payment_token: " cus_4")
# Booking.create(start_date: "2019-10-16", end_date: "2019-10-24", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 444444, user_id: 2, cabin_id: 4, cabin_type: "Family", price: 300, customer_payment_token: " cus_5")
# Booking.create(start_date: "2019-10-16", end_date: "2019-10-28", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", user_id: 1, cabin_id: 5, cabin_type: "B", price: 300, customer_payment_token: " cus_6")
# Booking.count == 6 ? (puts "6 bookings were created") : (puts "CREATING BOOKING ERRROR")
Priceevent.create(name: "Spring", start_date: "2019-03-19", end_date: "2019-06-20", multiplier: 1.05, recurring: true)
Priceevent.create(name: "Summer", start_date: "2019-06-21", end_date: "2019-09-22", multiplier: 1.25, recurring: true)
Priceevent.create(name: "Fall", start_date: "2019-09-23", end_date: "2019-12-21", multiplier: 1.20, recurring: true)
Priceevent.create(name: "Winter", start_date: "2019-12-22", end_date: "2020-03-18", multiplier: 1.005, recurring: true)
Priceevent.create(name: "Weekends", multiplier: 1.05, recurring: true)
Priceevent.create(name: "Recurring", start_date: "2018-12-15", end_date: "2019-01-10", adder: 120, recurring: true)
Priceevent.create(name: "Cabin1RangeIncrease", start_date: "2019-10-03", end_date: "2019-10-05", cabin_id: 1, multiplier: 1.05)
Priceevent.create(name: "Cabin2RangeDecrease", start_date: "2019-10-03", end_date: "2019-10-05", cabin_id: 2, adder: -100)
Priceevent.create(name: "Cabin3RangeDecrease", start_date: "2019-10-03", end_date: "2019-10-05", cabin_id: 3, multiplier: 0.80)
Priceevent.create(name: "Area51Raid", start_date: "2019-09-22", end_date: "2019-10-18", adder: 50)  
Priceevent.create(name: "SolarEclipse", start_date: "2020-12-20", end_date: "2020-12-23", adder: 120)
Priceevent.create(name: "SolarEclipse", start_date: "2020-12-20", end_date: "2020-12-23", cabin_id: 1, adder: 120)
Priceevent.count == 12 ? (puts "12 Price Events were created") : (puts "CREATING 12 PRICEEVENTS ERRROR")
Discount.create(name: "Nonrefundable", multiplier: 0.05, code: 12345678)
Discount.create(name: "CompanyABC", set_price: 120, code: 23456789)
Discount.create(name: "CompanyXYZ", subtractor: 25, code: 34567890)
Discount.create(name: "Seven Plus Days", multiplier: 0.05, code: 45678901)
Discount.create(name: "Fourteen Plus Days", multiplier: 0.10, code: 56789012)
Discount.create(name: "Twenty-One Plus Days", multiplier: 0.15, code: 67890123)
Discount.create(name: "CompanyMNO", multiplier: 0.05, code: 78901234)
Discount.count == 7 ? (puts "7 Discounts were created") : (puts "CREATING 7 DISCOUNTS ERRROR")

#! do discounts apply to VIP rooms? or do they need a special... something?
#! that begs the question should we allow cabin specific discounts???

# rand(19283746..99999999) # for Discount codes


# Recurring, date with without year. Single Event, date with year
