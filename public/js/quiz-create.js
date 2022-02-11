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
                // user_id
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log(response, "Quiz created!");
            document.location.replace("/createquiz/question");
        } else {
            alert(response.statusText);
        }
    }

}

document
  .querySelector("#submit-btn")
  .addEventListener("click", quizFormHandler);
