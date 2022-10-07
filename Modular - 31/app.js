document.getElementById('add-Border').addEventListener('click', function(){
    const value = document.getElementById('friend-container');
    value.style.border = '3px solid red';
})
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
    friend.style.backgroundColor = 'red';
    }
}
document.getElementById('addFriend').addEventListener('click',function (){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h3>friend</h3>
            <p>Praesentium, quaerat molestias! Impedit, vitae eveniet.</p>
  `;
    container.appendChild(friendDiv);
})