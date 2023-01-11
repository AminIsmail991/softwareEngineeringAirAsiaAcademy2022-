
document.querySelector('.clear-tasks').addEventListener('click',runEvent);

function runEvent(e){
    //console.log('Clicked');

    let val;
    val = e;

    //Even target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    //Even type
    val = e.type;

    //Timestamp
    val = e.timeStamp;

    //coord event related to the window
    val = e.clientY;
    val = e.clientX;

    //coords related to the element
    val = e.offsetY;
    val = e.offsetX;


    console.log(val);
}