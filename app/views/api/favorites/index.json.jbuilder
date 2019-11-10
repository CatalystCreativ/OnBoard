json.favorites do
    @favorites.each do |favorite|
        json.set! favorite.id true
    end
end

json.products do 
    @favorites.each do |favorite|
        json.set! favorite.id favorite
    end
end