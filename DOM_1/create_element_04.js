// we can construct the element from the scratch in js

//create element 
const li = document.createElement('li');

// add class
li.className='collection-item';

//add id
li.id = 'new-item';

//create text node and append it
li.appendChild(document.createTextNode('new item'));

//create link
const link = document.createElement('a');

//add class
link.className='delete-item secondary-content';

//add html icon
link.innerHTML='<i class="fa fa-remove"></i>';

//Append the link into li
li.appendChild(link);

//Append the li as the child of li
document.querySelector('ul').appendChild(li);