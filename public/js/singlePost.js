const deleteBtn = document.querySelector('.deleteModalBtn');
const editBtn = document.querySelector('.editModalBtn');
const formEl = document.querySelector(".comment-form");
const post = document.querySelector('.post');
const comments = document.querySelector('.comments');
const deleteCommentBtn =document.querySelector('.deleteCommentBtn');


const postId = post.getAttribute('data-postId')


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




async function deleteComment(){
    const id = comments.getAttribute('data-commentId')
    const data = await fetch(`/api/comment/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
    })
    if (data.ok){
      console.log(postId)
      document.location.assign(`/posts/4`);
    } 
    else{
      console.log('ERROR')
    }
}
deleteCommentBtn?.addEventListener('click', deleteComment)





// ask at start of class
// async function editPost() {
//     const id = post.getAttribute('data-postId')
//     const data = await fetch (`/api/posts/${id}`, {
//         method:'PUT',
//         headers: { 'Content-Type': 'application/json' },
//     })
//     if(data.ok){
//         document.location.assign('singlePost');
//     } else{
//         console.log('ERROR')
//     }
// }
// editBtn.addEventListener('click', editPost)






formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
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
