const firstName = 'sara';
const lastName = 'Smith';
const age = 30;
const test = 'Hello from Javascript';
const courses = 'web development,web design,cloud';

let val;

val = firstName + lastName;

//concatenation
val = firstName+'  '+lastName;

//Append  
val = 'kim';
val += 'Smith';

//escaping
val = 'That\'s awesome'; //output : That's awesome

//Length
val = firstName.length;

//change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

//char at
val = firstName.charAt('2');

//indexof
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

//substring
val = firstName.substring(1,3);

//slice
val = firstName.slice(0,3);
val = firstName.slice(-3);

//split
val = test.split(' ');
val = courses.split(',');

//replace (case sensitive)
val = test.replace('Javascript','React.js');

//includes() 
val = test.includes('Javascript');


console.log(val);
