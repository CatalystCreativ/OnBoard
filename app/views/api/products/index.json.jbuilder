json.array! @products do |product|
    json.id product.id
    json.photoUrls product.images.map { |file| url_for(file) }
    json.name product.name
end