//  function myFunk() {
//     let question = prompt('Tell me your name.');
//     console.log('Your name is ' + question);
//  }

// console.log('I love my JS students');



// console.log('Food');

// console.log('Cinema');

// console.log('Travel');

// console.log('Music');

// alert('Yo, welcome!');


// //display in browser instead of console//
// function grabElementAndSpitOutValue() {
//     // get element from index //
//     const MAIN_DIV = document.getElementByID('mainDiv');
//     // write inside out in HTML //
//     MAIN_DIV.innerHTML = 'Hey, I am here.';
//     // execute //
//     console.log('This hit.');
// }




// // const greeting = "hello";

// // if(greeting === "hi")
// // {
// //     console.log("Yes, this matches to HI");
// // }
// // else if(greeting === "hello")
// // {
// //     console.log("Yes, this matched HELLO");
// // }
// // else if(greeting == 1)
// // {
// //     console.log("Yeah this matches an integer of one.");
// // }
// // else
// // {
// //     console.log("None of them matched.");
// // }

// // let myArrayOfRandomInfo = ["Full Metal Jacket", 19, true, "2008"];

// // console.log(myArrayOfRandomInfo);
// // console.log(Array.isArray(myArrayOfRandomInfo));
// // myArrayOfRandomInfo.push("I Like Waterpolo"); // adds on to end of array
// // myArrayOfRandomInfo.unshift("I am now number one"); //adds to beginning of array

// // console.log(myArrayOfRandomInfo[0]);
// // myArrayOfRandomInfo.shift(); //removes first element in array
// // myArrayOfRandomInfo.pop(); //removes first element

// // myArrayOfRandomInfo.splice(1,1,5); //position, (1 overwrite, 0 to add prior), 3rd param: content value
// // console.log(myArrayOfRandomInfo);

// // myArrayOfRandomInfo = myArrayOfRandomInfo.slice(1);
// // console.log(myArrayOfRandomInfo);

// // let findPos = myArrayOfRandomInfo.indexOf("2008");
// // console.log(myArrayOfRandomInfo.indexOf("2008"));

// // let refreshed = myArrayOfRandomInfo.splice(findPos, 1);
// // console.log(refreshed);

// // let movie1 = ["Pulp Fiction", "Vincent Vega"];
// // let movie2 = ["Appocalypse Now", "Cap. Benjamin L. Willard"];
// // let movie3 = ["Full Metal Jacket", "Joker"];
// // let movie4 = ["Saving Private Ryan", "Private Ryan"];
// // let movie5 = ["Eternal Sunshine of The Spotless Mind", "Joel Barish"];

// // let favoriteMovies = [movie1, movie2, movie3, movie4, movie5];
// // let favoriteMovieTitles = [movie1[0],movie2[0],movie3[0],movie4[0],movie5[0]];
// // alert(favoriteMovieTitles);
// // let topBottomPick = [favoriteMovieTitles[2],favoriteMovieTitles[4]];
// // console.log(topBottomPick);
// // alert(`Length of favorite movies array is: ${favoriteMovies.length}`);


// // let x = 0;

// // while(x < 10)
// // {
// //     console.log(x);
// //     x++;
// // }

// // for (let i = 0; i < 20; i++)
// // {
// //     console.log(i);
// // }

// // let i = 0;

// // do
// // {
// //     console.log(i);
// //     i++;
// // } while(i < 10)

// let arr3 = [1,2,3,4,5];

// // arr3.forEach(function(x){console.log(x)});

// // let myString = "Hi, my name is Dj";

// // for (i of myString)
// // {
// //     console.log(i);
// // }

// let people = 
// [
//     { 
//         firstName : "Dj", 
//         lastName : "Rodriguez", 
//         age : 22
//     },
//     { 
//         firstName : "John", 
//         lastName : "Doe", 
//         age : 30
//     }
// ];

// for (person of people)
// {
//     console.log(person.firstName);
// }


// takehome-dayFour//////////////////////////////////

// Jacque's version

//create three variables of prompt values

// const taskOne = prompt('Give me your first task to do?');
// const taskTwo = prompt('Give me a second task you need to do?');
// const taskThree = prompt('Give me the last task you need to do?');

// let arrayOfTasks = [taskOne, taskTwo, taskThree];
// let secondArrayofTasks = [
//     [taskOne];
//     [taskTwo];
//     [taskThree];
// ];

// console.log(arrayOfTasks);
// console.log('second one: ', secondArrayOfTasks);

// const limit = 3;
// for(j = 0; j < limit; j++) {
//     console.log('j');
//     arrayOfTasks[j].push(`this will take ${Math.floor(Math.random() * 15)}`);
//     console.log(secondArrayofTasks[j]);
// }


//Michael O's version ////////

let numberOfItems = 3;
let toDoList = [];

for(let i = 0; i < numberOfItems; i++)
{
    toDoList.push([prompt(`Enter todo Item# ${i+1}`)]); //enter todo items as arrays
}

for(let i = 0; i < toDoList.length; i++)
{
    toDoList[i].push((i+1)*2); //add amount of days item will take
}

let longestTaskName = toDoList[0][0]; //default to first name value in list
let longestTaskDays = toDoList[0][1]; //default to first day(s) value in list
let iterator = 0;

while(iterator < toDoList.length)
{
    if(toDoList[iterator][1] > longestTaskDays)
    {
        longestTaskName = toDoList[iterator][0];
        longestTaskDays = toDoList[iterator][1];
    }
    iterator++;
}

console.log(`The longest task will be: ${longestTaskName}, it will take: ${longestTaskDays} days.`);

let j = 0;

do
{
    if(longestTaskName != toDoList[j][0])
    {
        toDoList[j].push("easy-peasy");
        alert(`${toDoList[j][0]}, is easy!`);
    }
    else
    {
        toDoList[j].push("difficult");
    }

    j++;

} while(j < toDoList.length)

console.log(toDoList);