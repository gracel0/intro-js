const body = document.body;
const container = document.createElement('div');

container.className = 'container text-center';

let test = body.appendChild(container);

console.log('my html: ', test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-2 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

// form tag > input:email:t-email - input:subject:t-text - textarea:t-text - button:t-submit

// //JS
// let loginEmail = document.forms.loginEmail;
// console.log(loginEmail);

// //console
// < input type="textemail" name="password" value="password">


const form = document.createElement('form');
form.setAttribute('method', 'GET');
form.setAttribute('action', 'form-submiision.js');
form.setAttribute('name', 'myForm');


const labelGenerator = (forElement) => {
    const label = document.createElement('label');
    label.setAttribute('for', forElement);
    label.innerText = text;
    return label;
}


const inputEmail = globalFormelements('input', 'email', 'email', 'form-control', 'Enter email here');
const inputSubject = globalFormElements('input', 'text', 'subject', 'form-control', 'Enter Subject here');
const textArea = textAreaElement('message', 'Your message here...', 'form-control', 'message', 5, '');
const button = document.createElement('button');
button.className = 'btn-primary btn';
button.setAttribute('type', 'submit');
button.innerText = 'Submit now';


// const inputEmail = document.createElement('input');
// inputEmail.setAttribute('type', 'email');
// inputEmail.setAttribute('name', 'email');
// inputEmail.setAttribute('class', 'form-control');
// inputEmail.setAttribute('placeholder', 'My Input Email');

//append labels to inputs

labelForSubject.appendChild(inputSubject);
labelForTextArea.appendChild(textArea);
formGroup.appendChild(labelForEmail);
labelForEmail.appendChild(inputEmail);
formGroup.appendChild(labelForSubject);
formGroup.appendChild(labelForTextArea);

form.appendChild(formGroup);
content.appendChild(form);

form.appendChild(inputEmail);
form.appendChild(inputSubject);
form.appendChild(textArea);
form.appendChild(button);


container.appendChild(form);


function globalFormElements(element, elementType, elementName, elementClass, elementId, elementPlaceholder) {
    //element : create the type of element you seek
    const newElement = document.createElement(element);
    newElement.setAttribute('type', elementType);
    newElement.className = elementClass;
    newElement.setAttribute('name', elementName);
    newElement.setAttribute('placeholder', elementPlaceholder);
    newElement.id = elementId;
    return newElement;
}

const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
    const element = document.createElement('textarea');
    element.setAttribute('type', 'text');
    element.className = elementClass;
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholder);
    element.setAttribute('cols', cols);
    element.setAttribute('rows', rows);
    element.id = elementID;
}

console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'Type your example here'));

console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, let us know your concerns here.' ));