class Api::ProductsController < ApplicationController

    # resources :users, only: [:create, :destroy, :show] do
    #     resources :products, only: [:index, :create, :destroy, :update]
    #   end
    #   resources :tags, only: [:create]

    def index
       
    end

    def show
        @product = Product.find(params[:id])
        if @product
            render :show
        else 
            render json: @product.errors.full_messages
        end
    end
    
    def find_or_create(value, category, product_id)
        tag_found = Tag.find_by(tag: value, category: category)
        if !tag_found
            tag_found = Tag.create(tag: value, category: category)
        end
        brand_product_tag = ProductTag.create(product_id: product_id, tag_id: tag_found.id)
    end

    def find_or_create_multiple(value, category, product_id)
        if value
            value.each { |tag| self.find_or_create(tag, category, product_id) }
        end
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            self.find_or_create_multiple(params[:product][:tags][:tagged], :tagged, @product.id)
            self.find_or_create(params[:product][:tags][:name], :name,  @product.id)
            self.find_or_create(params[:product][:tags][:brand], :brand, @product.id)
            render :show
        else 
            render json: @product.errors.full_messages 
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
