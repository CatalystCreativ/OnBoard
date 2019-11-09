class Api::UsersController < ApplicationController

    def create
      @user = User.new(user_params)
      debugger
      if @user.save
        login(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end
  
    def show
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: @user.errors.full_messages, status: 401
      end
    end
  
    def destroy
      User.destroy(params[:id])
    end
  
  
    private
  
    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
  