class HomeController < ActionController::Base
  protect_from_forgery with: :null_session

  def index
    render json: { items: Item.all }, status: :ok
  end
end
