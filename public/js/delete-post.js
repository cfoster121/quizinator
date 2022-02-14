async function editPostHandler(event) {
    event.preventDefault();
    //get the post title and the text
    const title = document.querySelector("#quiz-title").innerHTML;
    const body = document.querySelector("#quiz-category").innerHTML;
    const quiz_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  }
  
  //handle deleting the post
  async function deleteQuizHandler(event) {
    event.preventDefault();
    //make request to post route delete with the current post id in nav bar
    const quiz_id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    const response = await fetch("/api/quiz/" + quiz_id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    //check if all good
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  
  //delete post
  document
    .querySelector("#delete-btn")
    .addEventListener("click", deleteQuizHandler);