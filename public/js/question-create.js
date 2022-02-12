async function questionFormHandler(event) {
    event.preventDefault();
    const quiz_id = document.querySelector("#quiz-id").value.trim();
    const question_content = document.querySelector("#question-content").value.trim()
    const answer_a = document.querySelector("#answer-a").value.trim()
    const answer_b = document.querySelector("#answer-b").value.trim()
    const answer_c = document.querySelector("#answer-c").value.trim()
    const answer_d = document.querySelector("#answer-d").value.trim()
    const answer_correct = document.querySelector("#answer-correct").value.trim()


    if (quiz_id && question_content && answer_a && answer_b && answer_correct) {
        const response = await fetch("/api/question/", {
            method: "post",
            body: JSON.stringify({
                quiz_id,
                question_content,
                answer_a,
                answer_b,
                answer_c,
                answer_d,
                answer_correct
            }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log(response.blob(), "Questions created!");
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    }

}
const question = document.getElementById("single-question");
const questionBlock = document.getElementById("question-block")
function addQuestion(event) {
    console.log(event);
    
    const newQuestion = question.cloneNode(true);
    // question.innerHTML = "new question";
    console.log(newQuestion);
    questionBlock.appendChild(newQuestion);
}

document
  .querySelector("#submit-btn")
  .addEventListener("click", questionFormHandler);


document
  .querySelector("#add-question")
  .addEventListener("click", addQuestion);
