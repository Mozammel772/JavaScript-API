const dataLoad = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}
dataLoad();

const displayCountries = countrys => {
    // for(const country of countrys){
    //     console.log(country);
    // }
    const countryDiv = document.getElementById('countrie');
    countrys.forEach( countryes => {
        // console.log(countryes);
        // const div = document.createElement('div');
        const h3 = document.createElement('h3');
        // h3.innerText = countryes.name;
        h3.innerText = `Name: ${countryes.name}`
        countryDiv.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = countryes.capital;
        // div.innerText(p);
        // countryDiv.appendChild(div);
    })
};

