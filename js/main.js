//Create taco recipe using Prototypes. First, create what will be needed for the recipe itself.

function TacoRecipe(meat, seasonings, vegetables, tortilla) {
    this.meat = meat;
    this.seasonings = seasonings;
    this.vegetables = vegetables;
    this.tortilla = tortilla;
}

TacoRecipe.prototype.prepIngredients = function () {
    console.log(`Get two pounds of ${this.meat} and add to to pan. In a separate bowl, collect ${this.seasonings}. Makes sure to get your ${this.vegetables} ready to be washed and cut. Then dip the ${this.tortilla} in some oil and ready to fry in the pan.`);
}

TacoRecipe.prototype.howToEatTaco = function () {
   console.log(`After frying ${this.tortilla}, fill with ${this.meat} and ${this.vegetables}. Add any toppings.  Eat Tacos!`);  
}



//RANDOM NON-PROTOTYPE FUNCTION 



const asadaTaco = new TacoRecipe('carne asada',['garlic powder', 'cumin', 'onion powder', 'salt & pepper'], ['lemon', 'tomatoes', 'onion', 'lettuce/cabbage', 'radish'], 'corn tortilla');


const carnitas = new TacoRecipe('carnitas', 'salt', 'pico de gallo', 'corn cortilla');

//const howToEatTaco = new TacoRecipe('corn tortilla', 'ground beef', 'lettuce, tomatoes, onions');



//console.log(carnitas.prepIngredients());



asadaTaco.prepIngredients();
carnitas.prepIngredients();
carnitas.howToEatTaco();

function Test(phrase) {
    this.phrase = phrase;
}
function exampleTest(phrase) {
    Test.call(this.phrase);
    this.random = "I am iRobot";
}

console.log(new exampleTest('I win'));