// Creates a pizza object from the given ingredients
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return { crustType, sauceType, cheeses, toppings };
}

// --- Four predefined pizzas ---

const pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
const pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
const pizza3 = pizzaOven("thin crust", "alfredo", ["parmesan", "mozzarella"], ["chicken", "spinach"]);
const pizza4 = pizzaOven("stuffed crust", "bbq", ["cheddar", "mozzarella"], ["bacon", "red onions", "jalapeños"]);

// --- Random pizza generator ---

function randomPizza() {
    const crusts = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    const sauces = ["traditional", "marinara", "alfredo", "bbq", "pesto"];
    const cheeses = ["mozzarella", "feta", "parmesan", "cheddar", "goat cheese"];
    const toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bacon", "spinach", "jalapeños", "chicken", "pineapple"];

    // Pick one random element from an array
    const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)];

    // Pick `count` unique random elements from an array
    const pickMany = (arr, count) => {
        const shuffled = [...arr].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };

    return pizzaOven(
        pickOne(crusts),
        pickOne(sauces),
        pickMany(cheeses, Math.floor(Math.random() * 2) + 1),
        pickMany(toppings, Math.floor(Math.random() * 4) + 1)
    );
}

// --- Output ---

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(randomPizza());