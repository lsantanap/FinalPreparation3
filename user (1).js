const postListEl = document.querySelector('.post-list');
// Search HTML file for the first element containing the class post-list 
// This will let JS intereact with the element and make changes to it.
const id = localStorage.getItem("id")
    // getItem searches for the item we request in the local storage of the browser
    // Then we store that item in the variable id 

async function onSearchChange(event) {
    const id = event.target.value;
    renderPosts(id)
} 

async function renderPosts(id){
// Here we define an asyncrhonimus fuction renderPosts()
    
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    // Fetches userposts with ids that match the value inside the id varibale 
    // It then waits for the browser to load the content, before storing said posts inside the post variable
    const postsData = await posts.json();
// Transforms the data inside posts from JSON format to JS, by using the .json()method 
// Then the transformed data is stred inside the postsData variable
   postListEl.innerHTML =  postsData.map(post => postHTML(post)).join('');
   // The .join('') puts all the arrays into a neat, new string 
   // This way, it can be displayed efficiently by the browser. 
   // If not used, it wouldn't display correclty. 

    

}
renderPosts(id);

function postHTML(post){
    return `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`
}