class Desert {
  constructor(calories = 100) {
    this.calories = calories;
    this.ingredients = [];
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }
  setIngredients(ingredients) {
    this.ingredients = ingredients;
  }
  getIngredients() {
    return this.ingredients;
  }
}

const vanilla = new Desert(200);
vanilla.addIngredient("sugar");
vanilla.addIngredient("milk");

console.log("Ingredients: ", vanilla.getIngredients());

class IceCream extends Desert {
  constructor(flavor, calories, ingredients = [], toppings = []) {
    super(calories); // Set the parent class properties
    super.setIngredients(ingredients);
    this.flavor = flavor;
    this.toppings = toppings;
  }

  getFlavor() {
    return this.flavor;
  }
}

const vanillaIce = new IceCream(
  "vanilla",
  275,
  ["sugar", "milk"],
  ["chocochips", "jellies"]
);

console.log("Vanilla Ice", vanillaIce.getIngredients(), vanillaIce.getFlavor());

function Coffee(withSugar = false) {
  this.withSugar = withSugar;
}

Coffee.prototype.hasSugar = function () {
  return this.withSugar;
};

const myCoffee = new Coffee(true);
console.log("Coffee has sugar? ", myCoffee.hasSugar());
