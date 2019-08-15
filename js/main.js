// 

// const firstName = 'Grace';
// firstName = 'G';


// old way
// console.log('My name is' + firstName + 'and my age is' + age);
// better way
// console.log(`My name is ${firstName} and my age is ${age}`);

// alert(`Hello, I am ${firstName}`);
// console.log(firstName);

// const birthday = '08/14/2019';
// let fixDate = new Date(birthday);
// console.log(fixdate);

// let hello = 'hello there';
// alert(hello);
// console.log(typeof(hello));

// const firstName = 'Grace';
// console.log(firstName.length);

let firstName = prompt('What is your first name?');
let lastName = prompt('What is your last name?');

console.log(`Your first name is ${firstName}!`);
alert(`Your last name is ${lastName}!`);

let birthday = prompt('What is your birthday?');
let confirmed = confirm(`Is your birthday ${birthday}?`);
alert(`Your birthday is ${birthday}!`);