const name = 'sara';
const age = 30;
const job = 'actor';
const city = 'Kuala Lumpur';
let output;

// without template literals
output = '<ul>'+
'<li>Name: '+name+'</li>'+
'<li>Name: '+age+'</li>'+
'<li>Name: '+job+'</li>'+
'<li>Name: '+city+'</li>'+
'</ul>'

// with template literal (use back tick)
output = `<ul>
<li>Name: ${name}</li>
<li>Name: ${age}</li>
<li>Name: ${job}</li>
<li>Name: ${city}</li>
</ul>`;


document.body.innerHTML=output;