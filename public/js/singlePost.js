const deleteBtn = document.querySelector('.deleteModalBtn');
const editBtn = document.querySelector('.editModalBtn');
const cFormEl = document.querySelector(".comment-post-form");
const eFormEl = document.querySelector(".edit-post-form")
const post = document.querySelector('.post');


// function that deletes post
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



eFormEl.addEventListener("submit", async (e) => {
  e.preventDefault();
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
