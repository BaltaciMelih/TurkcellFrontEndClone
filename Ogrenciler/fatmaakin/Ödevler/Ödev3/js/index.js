const blogsContainer = document.getElementById("blogs-container");
const filterValue = document.querySelector('#filter');

const fetchBlog = async() => {
    const res = await fetch("http://localhost:3000/posts");
    if (!res.ok) {
        return;
    }
    const blogs = await res.json();

    blogs.forEach((blog) => {
        addBlog(blog);
    });
};

const addBlog = (blog) => {
    const template = `
     <div class="card">
     <h5 class="card-category">${blog.category}</h5>
     <a data-bs-toggle="modal" data-bs-target="#a${blog.id}">
     <img class="card-img" width="100%" height="300" src="${blog.imgsrc}" alt="image" >
        <h3 class="card-title">- ${blog.title}</h3>
        <h5 class="card-author">By ${blog.author}</h5>
        <hr>
        <hr>
        <p class="card-body">
          ${blog.body}
        </p>
        <div class="flex-group">
          <a href="./details.html?id=${blog.id}">Read More...</a>
          <h5 class="card-date">${blog.datetime}</h5>
        </div>
           </div>     
      
      
    `;
    blogsContainer.innerHTML += template;
};




fetchBlog();

document.querySelector('#filter').addEventListener('keyup', (e) => {
    const filterValue = e.target.value;
    let filterItem = document.querySelectorAll("card");
    filterItem.forEach((filterItem) => {
        let text = filterItem.textContent.toLowerCase();
        console.log(text.indexOf(filterValue));
        if (text.indexOf(filterValue) === -1) {
            filterItem.parentElement.parentElement.setAttribute(
                "style",
                "display:none !important"
            );
        } else {
            filterItem.parentElement.parentElement.setAttribute(
                "style",
                "display:block"
            );
        }
    });
})

// <!--Modal-->
//       <div class="modal fade" id="a${blog.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
//         <h4 class="modal-title mx-auto" id="myModalLabel">${blog.title}</h4>
//       </div>
//       <div class="modal-body">
//         <img class="card-img-top mb-3" width="100%" height="320" src="${blog.imgsrc}">
//           <h3 class= "card-text post-author img-fluid filter-author mb-3">Yazar: ${blog.author}</h3>
//           <p class="card-text post-content">${blog.body}</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-default" data-bs-dismiss="modal">Close</button>
//       </div>
//     </div>
//   </div>
// </div>