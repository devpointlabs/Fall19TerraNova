class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :cabin
  belongs_to :payment
end
