class Product < ApplicationRecord
    has_many: :product_tags
    has_many: :tags, through: :product_tags
end