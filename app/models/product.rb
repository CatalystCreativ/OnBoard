class Product < ApplicationRecord
    has_many :product_tags
    has_many :tags, through: :product_tags

    has_many_attached :images
    has_many :favorites
    has_many :favorited_users, through: :favorites

    belongs_to(:owner,
    class_name: 'User',
    foreign_key: :owner_id,
    primary_key: :id
    )
end