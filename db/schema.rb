# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_15_183853) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.integer "guests"
    t.text "special_needs"
    t.integer "booking_number"
    t.string "cabin_type"
    t.integer "price"
    t.integer "user_id"
    t.string "pm"
    t.boolean "modifiable", default: true
    t.bigint "cabin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "expected_arrival"
    t.string "customer_payment_token", null: false
    t.index ["cabin_id"], name: "index_bookings_on_cabin_id"
  end

  create_table "cabins", force: :cascade do |t|
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "cabin_number"
    t.string "cabin_letter"
  end

  create_table "discounts", force: :cascade do |t|
    t.string "name"
    t.integer "code"
    t.decimal "multiplier"
    t.integer "subtractor"
    t.integer "set_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "priceevents", force: :cascade do |t|
    t.string "name"
    t.date "start_date"
    t.date "end_date"
    t.integer "cabin_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.decimal "multiplier"
    t.decimal "adder"
    t.boolean "recurring"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "country"
    t.string "cellphone"
    t.date "birthday"
    t.date "anniversary"
    t.boolean "admin"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "bookings", "cabins"
end
