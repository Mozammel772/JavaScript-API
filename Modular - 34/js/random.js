const dataLoad = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data =>dataDisplay(data));
};
dataLoad();

const dataDisplay = (datas) => {
    const display1 = datas.results;
    const display = document.getElementById('random-container');
    for( const data of display1) {
        // console.log(data.email);
        console.log(data.name.first)
        const p = document.createElement('p');
        // p.innerText = data.email;
        p.innerText = `Name: ${ data.name.first} ${ data.name.last} ${data.email}`
        display.appendChild(p);
    }
};