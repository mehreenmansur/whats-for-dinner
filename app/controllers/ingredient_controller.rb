class IngredientController < ActionController::Base
  protect_from_forgery with: :null_session
  require "json"

  def create
    Item.create(fridge_item: params[:item])
  end

  def index
    json_from_file = File.read("./recipes.json")
    recipes = json_from_file.to_json
    hash = JSON.parse(recipes)
    hashes = []
    hash.each_line { |h| hashes << JSON.parse(h) }
    my_ingredients = []
    my_ingredients << Item.all
    result = []
    items = Item.all
    items.each_with_index do |my_ingredient, index|
      hashes.each do |recipe|
        if(recipe["ingredients"].any? {|ingredient| ingredient.include?(my_ingredient.fridge_item)})
          result << recipe if !result.include?(recipe)
        end
      end
    end

    render json: { recipes: result, items: items }, status: :ok
  end

  def get_recipe
    render json: { items: Item.all }, status: :ok
  end
end
