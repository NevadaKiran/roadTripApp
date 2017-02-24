class Artist < ApplicationRecord
  has_many :songs, dependent: :destroy
end
rails new matrix_app_api-backend --api -T -d postgresql
