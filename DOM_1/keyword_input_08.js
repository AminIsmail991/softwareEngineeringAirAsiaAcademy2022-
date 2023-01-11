const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');


// form.addEventListener('submit', runEvent);

//keyEvent
    //keydown
    // taskInput.addEventListener('keydown',runEvent);

    //key up
    // taskInput.addEventListener('keyup',runEvent);

    //keypress
    // taskInput.addEventListener('keypress',runEvent);

    //cut
    // taskInput.addEventListener('cut',runEvent);

    //blur
    // taskInput.addEventListener('blur',runEvent);

    //focus
    taskInput.addEventListener('focus',runEvent);


//Event handler
function runEvent(e){
    console.log(`Event type: ${e.type}`);

    e.preventDefault();
}