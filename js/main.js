// const exampleString = 'I am a string.';
// const exampleObjective = new String(1);
//const anotherString = 'I am a a string.';
const H1 = document.getElementById('greeting');

// console.log(H1);

// function checkExamples() {

    // if(exampleString == exampleObjective) {
    //     console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosely equal.`)
    // } else {
    //     console.log('Sorry, they do not equal at all.');
    // }

//     if(exampleString != anotherString) {
//         console.log(`Yes, ${exampleString} and ${exampleObjectString} do loosely equal.`)
//     } else {
//         console.log('Sorry, they do not equal at all.');
//     }
// }

// checkExamples ();

// const luckyNumber = 4;

// if(luckyNumber === 5 || luckyNumber == '3') {
//     console.log('Hey, your lucky number ${luckynumber}');

// } else {
//     console.log('Sorry, your number is not lucky to me.');
// }

// let a = 10;
// let b = 2;
// let result = 1;
// let b = 4;
// result *= 4;
// console.log(result);

// let hello = 'Hello ';
// let there = 'there!';
// let sentence = hello + there;
// console.log(sentence);

// let a = '5.99';
// let b = '2';
// let testModulo = 10 % 2;
// console.log(testModulo);
// let testNan = isNaN('hello';)
// console.log(testNan);
//let transformMe = parseInt(a);
//let result =  transformMe += b;
//console.log(`Before: ${a}, after: ${transformMe}`, typeof(transformMe));
//console.log(result);

//let valueNan = 'I am indeed NaN';
//let testNan = isNaN(valueNan);

//testNan ? console.log('THIS IS TRUE') : console.log('THIS IS FALSE');

// if(testNan === true) {
//     let resule = 'Yup, this is true.';
//     console.log('Yup, this is true.');
//     H1.innerHTML = result;
// } else {
//     let result = 'Nope, this is false.';
//     console.log('Nope, this is false.');
//     H1.innerHTML = result;
// }

// const askColor = prompt('Pick one of the following colors: red, blue, or orange. Await the following response...');

// switch(askColor) {
//     case 'red':
//         H1.innerHTML = `You chose ${askColor}'.. which reminds me of that song, Lady In Read.. is dancing with me...`;
//     break;
//     case 'blue':
//         H1.style.backgroundColor='#aaa';
//         H1.innerHTML = `You chose ${askColor} I'm dee abbb daa blue adaa`;
//     case 'orange':
//         H1.innerHTML = `You chose ${askColor} - only thing that comes to mind is Halloweentown`;
//     break;
//     default:
//         H1.innerHTML = `You did not follow the rules, fam`;
//     break;
// }

/////////////////////////////////////////////////////////////////////

const ask18 = prompt('Are you over 18? Type yes or no.');

switch(ask18) {
    case 'yes':
        H1.innerHTML = `You typed ${ask18}, so you may proceed.`;
    break;
    case 'no':
        H1.innerHTML = `You are not old enough to proceed. Go home.`;
    break;
}

const ask80 = prompt(`Are you under 80? Type yes or no.`);
    
switch(ask80) {
    case 'yes':
        H1.innerHTML = `Do you like Star Wars?`;
    break;
    case 'no':
        H1.innerHTML = `Do you like prunes?`;
    break;
}

//switch(ask#) 
