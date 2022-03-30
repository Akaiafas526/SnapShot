

const deleteBtn = document.querySelector('.deleteModalBtn');
const post = document.querySelector('.post');

async function deletePost()  {
    
    // const id = post.dataset.postId
    const id = post.getAttribute('data-postId')
    console.log(post)
    console.log(id)
    // fetch delete post route
    const data = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    // console.log(fetch)
}




deleteBtn.addEventListener('click', deletePost)
