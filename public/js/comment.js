//comment.js in public/js dirs


const commentFormHandler = async (event) => {
    event.preventDefault();
}

  
    const comment_content = document.querySelector('input[name="comment-body"]').value.trim();
   
// FIGURE OUT THE POST ID CONST HERE
//     const post_id = document.querySelector('input[name="post-id"]').value.trim();
  

    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ post_id, comment_content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }


  
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);
  
