async function quizFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector("#quiz-title").value.trim()
    const category = document.querySelector("#quiz-category").value.trim();

//If title and category have valid inputs, add new quiz to database
    if (title && category) {
        const response = await fetch("/api/quiz/", {
            method: "post",
            body: JSON.stringify({
                title,
                category
            }),
            headers: { "Content-Type": "application/json" },
        });
      

        if (response.ok) {

            const data = await response.json();
            imageUploadHandler(data.id);
            // console.log(data.id);
            document.location.replace(`/createquiz/question/${data.id}`);
        } else {
            alert(response.statusText);
        }
    }
}


async function imageUploadHandler(id) {
    // event.preventDefault();
    const image = document.querySelector("#image[type='file']");
    
    let formData = new FormData();
    formData.append("image", image.files[0]);
    console.log("-------", image.files.length);

    if (image.files.length) {
        const response = await fetch(`/api/image/${id}`, {
            method: "post",
            body: formData,
        });
      

        if (response.ok) {
            const data = await response.json();
   

        } else {
            alert(response.statusText);
        }
    }

}

document
  .querySelector("#submit-btn")
  .addEventListener("click", quizFormHandler);

// document
//   .querySelector("#submit-btn")
//   .addEventListener("click", imageUploadHandler);



