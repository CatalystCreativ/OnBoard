class Product < ApplicationRecord
    has_many :product_tags, dependent: :destroy
    has_many :tags, through: :product_tags

    has_many_attached :images, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :favorited_users, through: :favorites

    belongs_to :user
end