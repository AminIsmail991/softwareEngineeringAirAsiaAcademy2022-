// traversing is getting access to layer (the parent ,sibling , children etc)

//traversing the document object modal
//how to move around (select) parent and child elements

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;
val = listItem;

//how to get child node
//provide us a node list of all child
//text nodes are the line breaks 
// in most cases we need element child node

val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeType;

//Type of nodes :
// 1 - element
// 2 - attribute
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype

//how to get children element nodes
// it return html collection so we can treat it like an array
// except using loops and methods
// it should convert to an array to loop through and use methods

val = list.children;
val = list.children[0];
val = list.children[0].textContent='Hello';


// How to get access to the children of children
val = list.children[3].children[0].id='test-link';

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count child
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get next siblings 
val = listItem.nextSibling;
val = listItem.nextElementSibling;

//get previous siblings 
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);