class Cabin < ApplicationRecord
  has_many :bookings, dependent: :destroy
  has_many :users, through: :bookings
  has_many :payments, through: :bookings

  def self.avail(sd, ed)
    Cabin.find_by_sql(["
    SELECT *
    FROM bookings AS b
    LEFT JOIN cabins AS c
      ON b.cabin_id = c.id 
    WHERE 
    "])
  end
end
