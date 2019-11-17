class Api::ProductsController < ApplicationController

    # resources :users, only: [:create, :destroy, :show] do
    #     resources :products, only: [:index, :create, :destroy, :update]
    #   end
    #   resources :tags, only: [:create]


    def index
    end

    def create
        debugger
        product = Product.new(product_params)

        if product.save
            params[:product][:tags][:tagged].each { |tag|
                tag_found = Tag.find_by(tag: tag, category: :tagged)

                if !tag_found
                    tag_found = Tag.new({tag: tag, category: :tagged})
                    tag_found.save
                end
                  
                new_product_tag = ProductTag.new(product_id: product.id, tag_id: tag_found.id)
                new_product_tag.save
            }

            tag_found = Tag.find_by(tag: params[:product][:tags][:name], category: :name)

            if !tag_found
                tag_found = Tag.new({tag: params[:product][:tags][:name], category: :name})
                tag_found.save
            end

            name_product_tag = ProductTag.new(product_id: product.id, tag_id: tag_found.id)
            name_product_tag.save

            tag_found = Tag.find_by(tag: params[:product][:tags][:brand], category: :brand)

            if !tag_found
                tag_found = Tag.new({tag: params[:product][:tags][:brand], category: :brand})
                tag_found.save
            end

            brand_product_tag = ProductTag.new(product_id: product.id, tag_id: tag_found.id)
            brand_product_tag.save

            
            render json: {message: 'saved!'}
        else 
            render json: product.errors.full_messages 
        end
    end

    def destroy
    end

    def update
    end

    private 

    def product_params
        params.require(:product).permit(:name, :user_id, images: [])
    end
end
