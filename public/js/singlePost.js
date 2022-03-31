const deleteBtn = document.querySelector('.deleteModalBtn');
const editBtn = document.querySelector('.editModalBtn');

const commentBtn = document.querySelector('.commentModalBtn');
const commentBoxEl = document.querySelector('.newComment');

const post = document.querySelector('.post');

async function deletePost()  {
    const id = post.getAttribute('data-postId')
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


