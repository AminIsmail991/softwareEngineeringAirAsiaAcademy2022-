// selectors are DOM (document object model) methods that allow tp to access
   //to properties and elements
//single selectors are able to select one elements only.

// document.getElementById()
// select the single element by its id


// you can select an element and store it in a variable
const heading = document.getElementById('task-title');

// you can access info about the element
let val = heading.id;


//change the style
heading.style.background="#333";
heading.style.color="#fff";
heading.style.padding="5px";
// heading.style.display="none";


//change the content
heading.textContent='Task list';
heading.innerText="My tasks";
heading.innerHTML='<span style ="color:red">Task List</span>'; 


//document.querySelector()
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));


document.querySelector('li').style.color='red'; 
document.querySelector('ul li').style.color='blue';


// css pseudo selector will help you to select single element you want
document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='pink';
document.querySelector('li:nth-child(4)').textContent='hello';
document.querySelector('li:nth-child(odd)').style.background='#ccc';
document.querySelector('li:nth-child(even)').style.background='#f4f4f4';


console.log(val);
