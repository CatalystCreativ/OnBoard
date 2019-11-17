class Api::ProductsController < ApplicationController

    # resources :users, only: [:create, :destroy, :show] do
    #     resources :products, only: [:index, :create, :destroy, :update]
    #   end
    #   resources :tags, only: [:create]


    def index
    end

    def create
        @product = Product.new(product_params)
        if @product.save
            render :show
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
