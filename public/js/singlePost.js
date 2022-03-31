const formEl = document.querySelector(".comment-form");
const deleteBtn = document.querySelector(".deleteModalBtn");
const post = document.querySelector(".post");

async function deletePost() {
  // const id = post.dataset.postId
  const id = post.getAttribute("data-postId");
  console.log(post);
  console.log(id);
  // fetch delete post route
  const data = await fetch(`/api/post/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  // console.log(fetch)
}
deleteBtn.addEventListener("click", deletePost);

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
