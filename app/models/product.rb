class Product < ApplicationRecord
    has_many :product_tags
    has_many :tags, through: :product_tags

    has_many_attached :images
    has_many :favorites
    has_many :favorited_users, through: :favorites
end