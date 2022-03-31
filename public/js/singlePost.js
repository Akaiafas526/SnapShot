const deleteBtn = document.querySelector('.deleteModalBtn');
const editBtn = document.querySelector('.editModalBtn');
const cFormEl = document.querySelector(".comment-form");
const eFormEl = document.querySelector(".edit-post-form")
const post = document.querySelector('.post');
const comments = document.querySelector('.comments');
const deleteCommentBtn =document.querySelectorAll('#deleteComment');
const editCommentBtn =document.querySelectorAll('#editComment');
const deleteCommentModalBtn =document.querySelector('.deleteCommentBtn');
const editCommentModalBtn =document.querySelector('.editComment');
console.log(deleteCommentModalBtn)
let deleteModal = new bootstrap.Modal(document.getElementById('deleteCommentModal'), {});
let editModal = new bootstrap.Modal(document.getElementById('editCommentModal'), {});


deleteCommentBtn.forEach(( btn) => {
  btn.addEventListener('click', deleteComment)
})
editCommentBtn.forEach(( btn) => {
  btn.addEventListener('click', editComment)
})
deleteCommentModalBtn.addEventListener('click',deleteConfirmed)
editCommentModalBtn.addEventListener('click',editConfirmed)
const postId = post.getAttribute('data-postId')
let commentid;

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


async function deleteConfirmed(){
  const data = await fetch(`/api/comment/${commentid}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
})
if (data.ok){

  document.location.assign(`/posts/${postId}`);
} 
else{
  console.log('ERROR')
}
}
async function editConfirmed(e){
  e.preventDefault()
  const newText =  e.target.parentElement.parentElement.firstChild.nextElementSibling.value
  const data = await fetch(`/api/comment/${commentid}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body:JSON.stringify({text:newText})
})
if (data.ok){

  document.location.assign(`/posts/${postId}`);
} 
else{
  console.log('ERROR')
}
}


function deleteComment(e){
  e.preventDefault()
  e.stopPropagation()
  console.log(e,e.target.dataset.id)
  commentid = e.target.dataset.id
  // console.log(commentid, e.target, e.currentTarget,this)
    deleteModal.show()
    // deleteConfirmed(commentid)
    
}
function editComment(e){
  e.preventDefault()
  e.stopPropagation()
  console.log(e,e.target.dataset.id)
  commentid = e.target.dataset.id
  // console.log(commentid, e.target, e.currentTarget,this)
    editModal.show()
    // deleteConfirmed(commentid)
    
}



// editCommentBtn.addEventListener('click',(e)=>{
//   e.preventDefault()
//   const newText =  e.target.parentElement.parentElement.firstChild.nextElementSibling.value
//   console.log(e.target,newText)
//   //   const data = await fetch(`/api/comment/${commentid}`, {
// //     method: 'PUT',
// //     headers: { 'Content-type': 'application/json' },
// //     body:JSON.stringify({text:newText})
// // })
// // if (data.ok){

// //   document.location.assign(`/posts/${postId}`);
// // } 
// // else{
// //   console.log('ERROR')
// // }
// })


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

eFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  // console.log(e.target)
  const title = document.querySelector('.post-title').value
  const description = document.querySelector('.description-box').value

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





cFormEl.addEventListener("submit", async (e) => {
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
