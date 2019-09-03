
// //anon function
// let example = function () {
//     console.log('hello there');
// }

// //naming function
// function exampleName() {
//     console.log('hello there');
// }

//example();
//exampleName();

// white board
// check (p1, p2=null||'') {
//    }


// "Fat" Arrow Function

// const turnValueUppercase = val => console.log(val.toUpperCase());
// const multiplyValues = (arg1, arg2) => console.log(arg1 * arg2);
// //turnValueUppercase('hi');
// turnValueUppercase('hello');
// console.log(multiplyValues(2, 6));

// function turnValueUppercase(val) {
//     console.log(val.toUpperCase());
// }


//create an array of three names
// let names = [
//     'Jacque',
//     'Jake',
//     'Gina'
//     'ANOTHER NAME'
// ];

// //create a greeting that will be taking in a name value
// const greeting = name => `Good evening, ${name}`;

// // test result first:
// console.log(`The array of names ${names}`, `greeting function value: ${greeting('Example')}`);

// const limit = 3;
// //loop through names and add greeting function to it
// for(j = 0; j < names.length; j++) {
//     console.log(greeting(names[j]));
// }


//grab elements from HTML:

// const h1 = document.getElementById('greeting');
// const myList = document.getElementById('groceryList');
// const listItem = document.getElementById('groceryItem');
// const myInput = document.getElementById('getGroceryItem');

const greeting = document.getElementById('greeting');
const groceryList = document.getElementById('groceryList');
const groceryItem = document.getElementById('groceryItem');
const getGroceryItem = document.getElementById('getGroceryItem');

let arrayOfGroceryItems = [];

greeting.innerHTML = "Grace's Grocery List";

//create function to add onto grocery list
// const addGroceryItem = (arr, value) => arr.push(value);
// console.log(addGroceryItem(arrayOfGroceryItems, 'Carrots'));
// console.log(arrayOfGroceryItems);

function addGroceryItem(arr, value) {
    arr.push(value);
}

// addGroceryItem(arrayOfGroceryItems, 'Cucumber');
// console.log(arrayOfGroceryItems);

function ejectGroceryItemToList(val) {
    //grab list item
    //goal: push array items to list on html
    //groceryItem.innerHTML = val;
    //for(grocery = 0; grocery < arrayOfGroceryItems.length; grocery++) {
    //    groceryList.innerHTML = val;
    //}

    foreach() {
        groceryItem.innerHTML = values;
    }
    


addGroceryItem(arrayOfGroceryItems, 'Testing');
addGroceryItem(arrayOfGroceryItems, 'Chocolate');
console.log(arrayOfGroceryItems);
ejectGroceryItemToList(arrayOfGroceryItems);


//take home- finish the above, and takehome-dayFive

