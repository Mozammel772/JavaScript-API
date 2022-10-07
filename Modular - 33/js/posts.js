function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => getLoadPosts(data));
};
loadPosts();

function getLoadPosts(posts){
    // console.log(posts);
    for (const post of posts) {
        console.log(post);
    }
};