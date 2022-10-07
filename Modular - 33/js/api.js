function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
};
function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayDataUser(data));
};
function dataPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
};
function displayDataUser(data){
    const ul = document.getElementById('users');
    console.log(data);
    for ( const user of data) {
        // console.log(user.gmail);
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
   
};