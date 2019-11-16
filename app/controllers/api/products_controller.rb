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
        debugger
        if product.save
            render json: {message: "PRODUCT IS SAVED!"}
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
        params.require(:product).permit(:name, images: [])
    end
end
