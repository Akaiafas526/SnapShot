const deleteBtn = document.querySelector('.deleteModalBtn');
const editBtn = document.querySelector('.editModalBtn');
const formEl = document.querySelector(".comment-form");
const post = document.querySelector('.post');



async function deletePost()  {
    const id = post.getAttribute('data-postId')
    console.log(id)
    const data = await fetch(`/api/post/${id}`, {
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
