async function quizFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector("#quiz-title").value.trim()
    const category = document.querySelector("#quiz-category").value.trim();

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
            // console.log(data.id);
            document.location.replace(`/createquiz/question/${data.id}`);

        } else {
            alert(response.statusText);
        }
    }

}


async function imageUploadHandler(event) {
    event.preventDefault();
    const image = document.querySelector("#image[type='file']");
    console.log("-------", image);
    let formData = new FormData();
    formData.append("image", image.files[0]);

    if (formData) {
        const response = await fetch("/api/image/", {
            method: "post",
            body: formData,
                
                
            
            // headers: { "Content-Type": "multipart/form-data" },
        });
      

        if (response.ok) {
            const data = await response.json();
            // console.log(data.id);
            // document.location.replace(`/createquiz/question/${data.id}`);

        } else {
            alert(response.statusText);
        }
    }

}

document
  .querySelector("#submit-btn")
  .addEventListener("click", quizFormHandler);

document
  .querySelector("#image-submit-btn")
  .addEventListener("click", imageUploadHandler);

