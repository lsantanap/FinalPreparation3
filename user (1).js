const postListEl = document.querySelector('.post-list');
// Search HTML file for the first element containing the class post-list 
// This will let JS intereact with the element and make changes to it.

async function onSearchChange(event) {
    const id = event.target.value;
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    // Fetches userposts with ids that match the value inside the id varibale 
    // It then waits for the browser to load the content, before storing said posts inside the post variable
    const postsData = await posts.json();
    // Transforms the data inside posts from JSON format to JS, by using the .json()method 
    // Then the transformed data is stred inside the postsData variable
   postListEl.innerHTML =  postsData.map(post =>`
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`).join('');
} 

async function main(){
// Here we define an asyncrhonimus fuction main()
    const id = localStorage.getItem("id")
    // getItem searches for the item we request in the local storage of the browser
    // Then we store that item in the variable id 
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    // Fetches userposts with ids that match the value inside the id varibale 
    // It then waits for the browser to load the content, before storing said posts inside the post variable
    const postsData = await posts.json();
// Transforms the data inside posts from JSON format to JS, by using the .json()method 
// Then the transformed data is stred inside the postsData variable
   postListEl.innerHTML =  postsData.map(post =>
    // Pareses the HTML string unto the postListEl variable. This allows the browser to dynamically update our website 
    // That map is used to turn the data in postsData into a new array, containing 
    // the details below 
    `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`).join('');
    // The .join('') puts all the arrays into a neat, new string 
    // This way, it can be displayed efficiently by the browser. 
    // If not used, it wouldn't display correclty. 

}
main();