// const container = document.querySelector('.container');
// console.log(container);

// const h1 = document.querySelector('h1');
// // console.log(h1);
// // let message = h1.innerHTML = 'I am a message.';
// // //console.log(h1.textContent);

// function globalListItems() {
//     //create a ul/ol, create li, with any classes or attributes or ids needed

//     //create ul
//     const ul = document.createElement('ul');
//     // console.log('unordered list', ul);
//     //create list item
//     const li = document.createElement('li');
//     // console.log('list item', li);
//     //attributes/classes/id
//     li.className = ['list-group-item', 'list-group-item-info'];
//     // console.log('li with classes', li);
//     li.innerHTML = 'I am a list item.';
//     li.id = 'mySpecialListItem';

//     const image = document.createElement('img');
//     image.setAttribute('alt', 'I am an empty image');
//     //or image.setAttribute('src', '../img/example.jpg)
//     //or image.setAttribute('class', 'img-responsive')
    
//     console.log(image);
//     //append to container->ul->li
//     ul.appendChild(li);
//     // console.log('complete ul', ul);
//     container.appendChild(ul);
// }

// globalListItems();


const container = document.querySelector('.container');
const button = document.createElement('button');
button.id = "triggerMagic";
button.className = "btn btn-primary btn-sm text-uppercase center_center";
button.innerHTML = "click for some magic";
container.appendChild(button);



let triggered = () => {
    button.addEventListener('click', () => {
            poster();
    });
}

function poster () {
    //create a card parent div that will have: h1, img, p, icon>link
    const panelDiv = document.createElement('div');
    panelDiv.className = 'panel panel-default col-md-6 text-center';
    const wrapper = document.createElement('div');
    wrapper.className = 'col-md-4';
    const h1 = document.createElement(h1);
    h1.className = "panel-title";
    const image  = document.createElement('img');
    image.className = 'img-responsive';
    image.setAttribute('src', '../img/hero_2,jpeg');
    image.setAttribute('alt', 'Groceries');
    const p = document.createElement('p');
    p.innerText = 'Grocery stores serve wonderful produce to the world of tomorrow';
    const anchor = document.createElement('a');
    anchor.setAttribute

}



