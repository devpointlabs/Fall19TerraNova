User.create(email: "test@test.com", password: "password", password_confirmation: "password", first_name: "John", last_name: "Doe", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, country: "USA", cellphone: "8015551234", birthday: "1990-01-01", anniversary: "2010-02-02", admin: false)
User.create(email: "test2@test.com", password: "password", password_confirmation: "password", first_name: "Jane", last_name: "Doe", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, country: "USA", cellphone: "8015551234", birthday: "1990-01-01", anniversary: "2010-02-02", admin: false)
puts "John and Jane Doe Created"
Cabin.create(name: "cabin1", price: 125, occupied: false, occupancy: 4, description: "This is the first cabin made. Great quality")
Cabin.create(name: "cabin2", price: 125, occupied: false, occupancy: 4, description: "This is the second cabin made. Great quality")
Cabin.create(name: "cabin3", price: 125, occupied: false, occupancy: 4, description: "This is the third cabin made. Great quality")
Cabin.create(name: "cabin4", price: 125, occupied: false, occupancy: 4, description: "This is the fourth cabin made. Great quality")
Cabin.create(name: "cabin5", price: 125, occupied: false, occupancy: 4, description: "This is the fifth cabin made. Great quality")
puts "5 cabins were created"
Payment.create(name: "John Doe", credit_card: "4444-5555-6666-7777", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, expiration: "04/29", price: "124")
Payment.create(name: "Jane Doe", credit_card: "4444-5555-6666-7777", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, expiration: "04/29", price: "124")
Payment.create(name: "Jack Doe", credit_card: "4444-5555-6666-7777", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, expiration: "04/29", price: "124")
Payment.create(name: "Jenny Doe", credit_card: "4444-5555-6666-7777", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, expiration: "04/29", price: "124")
Payment.create(name: "Jenkins Doe", credit_card: "4444-5555-6666-7777", address: "123 Fake Street", city: "SLC", state: "UT", zip: 88888, expiration: "04/29", price: "124")
puts "5 payments were created"
Booking.create(start_date: "2019-10-01", end_date: "2019-10-03", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 000000, user_id: 1, cabin_id: 5, payment_id: 1)
Booking.create(start_date: "2019-10-01", end_date: "2019-10-04", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 111111, user_id: 1, cabin_id: 1, payment_id: 1)
Booking.create(start_date: "2019-10-02", end_date: "2019-10-05", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 222222, user_id: 2, cabin_id: 2, payment_id: 2)
Booking.create(start_date: "2019-10-03", end_date: "2019-10-06", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 333333, user_id: 1, cabin_id: 3, payment_id: 3)
Booking.create(start_date: "2019-10-04", end_date: "2019-10-07", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 444444, user_id: 2, cabin_id: 4, payment_id: 4)
Booking.create(start_date: "2019-10-05", end_date: "2019-10-08", guests: 4, expected_arrival: "12:00PM", special_needs: "NONE", booking_number: 555555, user_id: 1, cabin_id: 5, payment_id: 5)
puts "6 bookings were created"
Priceevent.create(name: "Recurring", start_date: "2018-12-15", end_date: "2019-01-10", adder: 120, recurring: true)
Priceevent.create(name: "Spring", start_date: "2019-03-19", end_date: "2019-06-20", multiplier: 1.05, recurring: true)
Priceevent.create(name: "Summer", start_date: "2019-06-21", end_date: "2019-09-22", multiplier: 1.25, recurring: true)
Priceevent.create(name: "Fall", start_date: "2019-09-23", end_date: "2019-12-21", multiplier: 1.20, recurring: true)
Priceevent.create(name: "Winter", start_date: "2019-12-22", end_date: "2020-03-18", multiplier: 1.005, recurring: true)
Priceevent.create(name: "Weekends", multiplier: 1.05, recurring: true)
Priceevent.create(name: "Cabin1RangeIncrease", start_date: "2019-10-03", end_date: "2019-10-05", cabin_id: 1, multiplier: 1.05)
Priceevent.create(name: "Cabin2RangeDecrease", start_date: "2019-10-03", end_date: "2019-10-05", cabin_id: 2, adder: -100)
Priceevent.create(name: "Cabin3RangeDecrease", start_date: "2019-10-03", end_date: "2019-10-05", cabin_id: 3, multiplier: 0.80)
Priceevent.create(name: "Area51Raid", start_date: "2019-09-22", end_date: "2019-10-18", adder: 50)  
Priceevent.create(name: "SolarEclipse", start_date: "2019-12-13", end_date: "2019-12-13", cabin_id: 1, adder: 120)
puts "8 Price Events were create"

# Recurring, date with without year. Single Event, date with year
