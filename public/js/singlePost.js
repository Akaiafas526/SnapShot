const deleteBtn = document.querySelector('.deleteModalBtn');
const editBtn = document.querySelector('.editModalBtn');
const cFormEl = document.querySelector(".comment-form");
const eFormEl = document.querySelector(".edit-post-form")
const post = document.querySelector('.post');
const comments = document.querySelector('.comments');
const deleteCommentBtn =document.querySelectorAll('#deleteComment');
const editCommentBtn =document.querySelectorAll('#editComment');
const deleteCommentModalBtn =document.querySelector('.deleteCommentBtn');
const editCommentModal =document.querySelector('.edit-comment-form');
const editCommentText =document.querySelector('#edit-comment-text');
const postTitle = document.querySelector('.single-post-title');
const postDescription = document.querySelector('.single-post-text');


let deleteModal = new bootstrap.Modal(document.getElementById('deleteCommentModal'), {});
let editModal = new bootstrap.Modal(document.getElementById('editCommentModal'), {});

// Adds even listener for every delete and edit button in the comment section
deleteCommentBtn.forEach(( btn) => {
  btn.addEventListener('click', deleteComment)
})
editCommentBtn.forEach(( btn) => {
  btn.addEventListener('click', editComment)
})

// Adds eventlisterner for the delete and edit button in the modal
deleteCommentModalBtn.addEventListener('click',deleteConfirmed)
editCommentModal.addEventListener('submit',editConfirmed)

// Post id for currently selected post
const postId = post.getAttribute('data-postId')

// Grabs the current post title and description and sets it as the placeholder for editing
const titleEl = document.querySelector('.post-title')
const descriptionEl = document.querySelector('.description-box')
titleEl.placeholder=postTitle.textContent
descriptionEl.placeholder=postDescription.textContent;


let commentid;

// Deletes post based on current post id
async function deletePost()  {
    const data = await fetch(`/api/post/${postId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    if (data.ok){
        document.location.assign('/');
    }
    else {
        console.log('ERROR')
    }
}
deleteBtn.addEventListener('click', deletePost)


// Processes the deletion of the comment
async function deleteConfirmed(){
  const data = await fetch(`/api/comment/${commentid}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
})

// Returns the the current post
if (data.ok){

  document.location.assign(`/posts/${postId}`);
} 
else{
  console.log('ERROR')
}
}

// Processes the comment update
async function editConfirmed(e){
  e.preventDefault()
  
  // Checks for empty string
  const newText =  editCommentText.value
  if (newText.replace(/\s+/g, '')===''){
    return
  }
  const data = await fetch(`/api/comment/${commentid}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body:JSON.stringify({text:newText})
})
if (data.ok){

  // Returns to current post
  document.location.assign(`/posts/${postId}`);
} 
else{
  console.log('ERROR')
}
}

// Sets the id of the comment to the id of the button pressed and opens modal to confirm
function deleteComment(e){
  e.preventDefault()
  e.stopPropagation()
  
  commentid = e.target.dataset.id
    deleteModal.show()
    
}

// Sets the id of the comment to the id of the button pressed and sets placeholder text to the current comment text
// Opens edit modal to enter information and edit
function editComment(e){
  e.preventDefault()
  e.stopPropagation()
  editCommentText.placeholder = e.target.parentElement.children[1].textContent
  
  commentid = e.target.dataset.id
    editModal.show()
    
}

// Edits post by post id
eFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.querySelector('.post-title').value
  const description = document.querySelector('.description-box').value

  // Checks if only spaces were entered
  if(title.replace(/\s+/g, '')===''&&description.replace(/\s+/g, '')===''){
    return
  }
  const id = post.getAttribute('data-postId')
  const response = await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({
       title,
       description
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    console.log("Unable to edit post");
  }
});




// Creates a comment for the post selected
cFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  // Checks for empty string
  if (e.target[2].value.replace(/\s+/g, '')===''){
    return
  }
  const response = await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({
      postId: e.target[1].value,
      text: e.target[2].value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    console.log("Unable to add comment");
  }
});
