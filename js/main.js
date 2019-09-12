const container = document.createElement('main');
// container.className = 'container';
container.classList.add('container');
// container.classList.remove('container');

document.body.appendChild(container);
container.innerHTML = '<h1>Hello</h1>';
console.log(container);

function movieQuote() {
    alert('The Force is strong within you.');
}

let timer;
function callQuote() {
    //timer = setInterval(movieQuote, 3000);
}

function stopFromRunning() {
    clearInterval(timer, 1000);
}

const button = document.createElement('button');
button.setAttribute('onclick', 'callQuote()');
button.innerText = 'Click For A Movie Quote';
button.className = 'btn btn-primary btn-lg';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.className = 'alert alert-danger border-danger border';
stopButton.setAttribute('onclick', 'stopFromRunning()');
stopButton.innerText = 'STOP';

button.addEventListener('click', () => {
    sessionStorage.setItem('Temporary', 'Every problem is temporary');
    sessionStorage.getItem('Temporary');
    localStorage.setItem('Death', 'Except for death');
    localStorage.getItem('Death');

    //container.appendChild(stopButton);
});



// // Session Storage
// sessionStorage.setItem('Temporary', 'Every problem is temporary');
// sessionStorage.getItem('Temporary');

// // Local Storage
// localStorage.setItem('Death', 'Except for death');
// localStorage.getItem('Death');


// anon function triggers another function within
const example = function(param); {
    return test(j);
}

function test(testParam) {
    alert(testParam);
}

example('Okay, I see what you did there tho');

