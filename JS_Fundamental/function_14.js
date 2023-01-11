//Function declaration

function greet(firstName='John',lastName='Doe'){
    // if(typeof firstName === 'undefined') {firstName = 'john'}
    // if(typeof firstName === 'undefined') {lastName = 'Doe'}


    console.log(`welcome ${firstName} ${lastName}` );
}

greet();

//function expression
const square = function(x=3){  // if want to be default value, enter it into parentheses
    return x*x;
};

console.log(square(5));

//Immediate invocable function expression
(function(){
    console.log('IIFE RAN.....');
})();

(function(userName){
    console.log(`welcome ${userName}`)
})('sara');

(function(userName='John'){
    console.log(`welcome ${userName}`)
})();


// property method
// when a function is a property of an object its call method

const todo = {
    add : function(){
        console.log('add to the list');
    },
    edit : function(){
        console.log('edit to the list')
    }
}

todo.add();
todo.edit();