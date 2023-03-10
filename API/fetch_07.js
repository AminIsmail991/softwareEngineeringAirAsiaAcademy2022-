document.getElementById('btn1').addEventListener('click',getText);
document.getElementById('btn2').addEventListener('click',getJson);
document.getElementById('btn3').addEventListener('click',getExternal);


//Get local text file
function getText(){
    fetch('data_07.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('output').innerHTML=data;
    })
    .catch(function(err){
        console.log(err);
    })
}

//Get local json
function getJson(){
    fetch('posts_07.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.getElementById('output').innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    })
}

//get data from external api 
function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`;
        });
        document.getElementById('output').innerHTML=output;
    })
    .catch(function(err){
        console.log(err);
    })  
}
