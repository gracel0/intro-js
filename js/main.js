 function myFunk() {
            let question = prompt('Tell me your name.');
            console.log('Your name is ' + question);
}

console.log('I love my JS students');



console.log('Food');

console.log('Cinema');

console.log('Travel');

console.log('Music');

alert('Yo, welcome!');


//display in browser instead of console//
function grabElementAndSpitOutValue() {
    // get element from index //
    const MAIN_DIV = document.getElementByID('mainDiv');
    // write inside out in HTML //
    MAIN_DIV.innerHTML = 'Hey, I am here.';
    // execute //
    console.log('This hit.');
}