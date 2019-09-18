// // //https://dog.ceo/api/breeds/list/all

// // //https://dog.ceo/api/breeds/image/random

// // // after breeds the data will change to whatever I want

// // function playWithAPi() {
// //     const url = 'https://dog.ceo/api/breed/germanshepherd/images/random'; 
// //     fetch(url);
// //     console.log(url);
// // }

// // playWithAPi();


// //Play with testing JSON:
// const exampleJson = '{"name": "Grace", "age": 100}';
// const exampleTwo = '{"random": 7, "phrase": "This is supa cool"}';
// const exampleParse = JSON.parse(exampleJson);
// //wrapper.innerText = exampleJson.name;
// //wrapper.innerText = exampleParse.name;
// const exampleStringify = JSON.stringify(exampleTwo);
// //wrapper.innerText = exampleStringify;

// console.log(exampleTwo);



// function practiceScope() {
//     let random = 'Inside scope';

//     const phrase = function () {
//         console.log('This is supa cool, Jax');
//     }

//     return phrase();
// }

// let practiceOutside = practiceScope();



// //TODO: *OPTIONAL* Create Class that will call in a basis constructor regarding info
// //Call api and use at least one parameter placeholder so you can change api value at random
// //One random function to do something with that information


// class AboutMe {
//     constructor(name, petName, petBreed) {
//         this.name = name;
//         this.petName= petName;
//         this.petBreed = petBreed;
//     }
// }

// let p = new AboutMe('Grace', 'dog', 'German Shepherd');
// // AboutMe.prototype.myDog = 
// //     let newurl = `https://dog.ceo/api/breed/${this.petBreed}/images/random`;
// //     fetch(url);
// //     console.log(url);


// // const grace = new AboutMe('Grace', 'dog', 'German Shepherd');
// // console.log(grace);

// // (`Hi, my name is ${name}.  I don't have a ${pet}, but if I did, it would be a ${petBreed}.`);


// let body = document.body;
// let container = document.createElement("div");
// body.appendChild(container);
// let image = document.createElement("img");

// //Plain HTTPS request and json returned.
// function getDogPic(petBreed) {
//     var url = `https://dog.ceo/api/breed/${petBreed}/images/random`;
//     fetch(url) // Call the fetch function passing the url of the API as a parameter
//       .then(function(resp){
//         return resp.json()// Transform the data into json
//       })
//       .then(function(data) {
//         console.log(data);
//         image.setAttribute("src", data.message);
//         container.appendChild(image);
//         //How can we display this data?
//       })
//       .catch(function() {
//           // This is where you run code if the server returns any errors
//       });
//   };

// getDogPic("germanshepherd");



class Produce {
    constructor(name, price, organic) {
        this.name = name;
        this.price = price;
        this.organic = organic;
    }
}

const cherry = new Produce('Cherry', 2.99, false);
console.log(cherry);

const produce = ' {"Cherry": {"price": 2.99, "organic": false}}', "Orange": {"price": 1.99, "organic": true}}'';
const parsed = JSON.parse(produce);
console.log(produce);
console.log(parsed.Orange);

//import {ProduceApi} from '../js/produceapi.js';                                                                                           
