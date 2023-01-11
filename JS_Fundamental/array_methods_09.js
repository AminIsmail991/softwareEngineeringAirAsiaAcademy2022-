// Create some arrays
const numbers = [43,65,77,100,1,23]; //recommended to use this 
const numbers2=new Array(22,44,55,66,77);
const fruits = ['Apple','Orange','Kiwi','Banana'];
const mix = ['hello',3,true,undefined,{a:1,b:2}];

let val;

//Get an array length
val = numbers.length;
val = fruits.length;
val = mix.length;

//check if array is array
val = Array.isArray(numbers2);

//get a single value
val = numbers[3];

//change the value
numbers[3]=25;

//find the index of the value
val = numbers.indexOf(1);

//mutate an array
//add on to the end
numbers.push(777);

//add to the beginning 
numbers.unshift(55);

//remove from the end 
numbers.pop();

//remove from beginning
numbers.shift();

//splice
//numbers.splice(1,4);

//reverse
numbers.reverse();

//concat
val = numbers.concat(numbers2);

//sort arrays
val = fruits.sort();
val = numbers.sort();

//sorting an array with compare function
//val = numbers.sort(function(x,y){
//    return x-y;
//});

//val = numbers.sort(function(x,y){
//    return y-x;
//});

//find 
// check number over 50
function over50(num){
    return num > 50;
};

val = numbers.find(over50);


console.log(val);