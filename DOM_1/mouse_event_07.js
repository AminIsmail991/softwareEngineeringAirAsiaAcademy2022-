const clearBTN = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');  // use querySelector because it single element
const heading = document.querySelector('h5');  

//click
//clearBTN.addEventListener('click', runEvent);


//Double click
// clearBTN.addEventListener('dblclick', runEvent);

//Mouse down
// clearBTN.addEventListener('mousedown', runEvent);

//Mouse up
// clearBTN.addEventListener('mouseup', runEvent);


//mouse enter and leave fires off when we (enter and leave the element)
//mouse enter
// card.addEventListener('mouse enter', runEvent);

//mouse leave
// card.addEventListener('mouse leave', runEvent);


//mouse over and mouse out fires off for nested element
//mouse over
// card.addEventListener('mouseover', runEvent);

//mouseout
//card.addEventListener('mouseout', runEvent);

//mousemove
card.addEventListener('mousemove', runEvent);


//Event handler 
function runEvent(e){
    console.log(`Event Type : ${e.type}`);

    heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.background=`rgb(${e.offsetX},${e.offsetY},40)`;
}
