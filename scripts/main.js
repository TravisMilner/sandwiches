console.log("Welcome to the main module")
// 1. Define a function called "makeSandwich" that takes 4 parameters: protein, cheese, veggie, bread
// 2. makeSandwich should create a new sandwich object with the 4 parameters as its key/value pairs
// 3. makeSandwich will return our newly created sandwich
// 4. Call it a few times passing in different arguments to make different sandwiches!

const makeSandwich = (protein, cheese, veggie, bread) => {
    let sandwich = {
        protein: protein,
        cheese: cheese,
        veggie: veggie,
        bread: bread,
    }
    return sandwich;
}

const hamAndCheese = makeSandwich("ham", "colby", "lettuce", "sourdough")
console.log(hamAndCheese)

const turkeyAndCheese = makeSandwich("turkey", "pepperjack", "tomato", "potato bread")
console.log(turkeyAndCheese)

const bologna = makeSandwich("bologna", "american", "onion", "rye")
console.log(bologna)