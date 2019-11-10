class Api::FavoritesController < ApplicationController
    
    def create
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
            @product = Product.find(@favorite.product_id)
            render :show
        else
            render json: @favorite.errors.full_messages
        end
    end

    def index
        @user = User.find(params[:user_id])
        @favorites = @user.favorite_products
        render :index
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
    end

    private 
    def favorite_params
        params.require(:favorite).permit(:user_id, :product_id)
    end
end