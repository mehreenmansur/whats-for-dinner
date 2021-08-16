class HomeController < ActionController::Base
  require "json"

  def item

  end

  def import_recipes
    require "json"

    json_from_file = File.read("./recipes.json")
    # hash = eval(json_from_file)
    # hash = MultiJson.read(json_from_file)

    recipes = json_from_file.to_json
    # hash = JSON.stringify(recipes)
    hash = JSON.parse(recipes)
    hashes = []
    # hash = hash.to_json
    hash.each_line { |h| hashes << JSON.parse(h) }
    # hash.each_line do |h| puts JSON.parse(h['ingredients']) end
    # hash.each_line { |key, value| puts "h: #{key}" }
    # hash.each_line { |k, v| puts "h: #{k}" }
    # print hashes.to_json
    # pretty = JSON.pretty_generate(hashes)

    # hash = JSON.pretty_generate recipes
    # hash = Hash.new(hash)
    # file = File.open "./recipes.json"
    # recipes = JSON.load file
    my_ingredients = ['chicken', 'pommes']
    result = []
    my_ingredients.each_with_index do |my_ingredient, index|
      answers = []
      hashes.each do |recipe|
          # puts "my_ingredient: #{my_ingredient}"
          # puts "recipe]: #{recipe["ingredients"]}"
          # does_contain = recipe["ingredients"].any? {|ingredient| ingredient.include?(my_ingredient)}
          answers << recipe if recipe["ingredients"].any? {|ingredient| ingredient.include?(my_ingredient)}
          # puts "-+++---, #{recipe["ingredients"].any? {|ingredient| ingredient.include?(my_ingredient)}}"
      end
      result[index] = answers if !answers.nil?
    end
    # select_recipes = hashes.select {|recipe| p recipe["ingredients"] & my_ingredients}
    # select_recipes = hashes.select {|recipe| p recipe["ingredients"].any? {|w| w.include?(my_ingredients)} }
    # select_recipes = hashes.select {|recipe| puts recipe["ingredients"] }
    puts "result -----json-----#{JSON.pretty_generate(result[1])}"
    # puts "recipes -----json-----#{recipes}"
    # puts "recipes -----json-----#{(hashes)}"
    # hashes.each { |h| puts h['ingredients']}
    # puts "recipes -----json-----#{(JSON.pretty_generate((hashes)))}"
    # puts "recipes -----json-----#{hash.count}"
    # puts "recipes -----json-----#{json_from_file.to_json}"
    # puts "select_recipes ----------#{select_recipes}"
  end
end
