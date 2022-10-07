const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText} `;
    
    fetch(url)
    .then(res => res.json())
    .then(data => searchMeals(data.meals));
}
const searchMeals = meals => {
    console.log(meals);
    const searchResult = document.getElementById('search-result');
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
        <img src="${meals.strDrinkAlternate}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">Card title</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div> `;
      searchResult.appendChild(div);
}