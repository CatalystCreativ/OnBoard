# resources :users, only: [:create, :destroy, :show] do
#     resources :products, only: [:index, :create, :destroy, :update]
#   end
#   resources :tags, only: [:create]


def index
end

def create
end

def destroy
end

def update
end

private 

def post_params
    params.require(:product).permit(:name, photos: [])
end