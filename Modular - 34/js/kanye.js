const dataKanye = () => {
  fetch('https://api.kanye.rest/')
  .then( res => res.json())
  .then(data => dataLoadKanye(data));
};

const dataLoadKanye = (Shakil) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = Shakil.quote;
}