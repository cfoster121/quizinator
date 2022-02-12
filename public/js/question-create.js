

async function questionFormHandler(event) {
    event.preventDefault();
    const questionForm = document.getElementsByClassName("single-question");
    const data = [];
    for (let i of questionForm) {
        data.push({
            quiz_id : i.querySelector("#quiz-id").value.trim(),
            question_content : i.querySelector("#question-content").value.trim(),
            answer_a : i.querySelector("#answer-a").value.trim(),
            answer_b : i.querySelector("#answer-b").value.trim(),
            answer_c : i.querySelector("#answer-c").value.trim(),
            answer_d : i.querySelector("#answer-d").value.trim(),
            answer_correct : i.querySelector("#answer-correct").value.trim()
        })
    }
    console.log(data);

    // if (quiz_id && question_content && answer_a && answer_b && answer_correct) {
        const response = await fetch("/api/question/", {
            method: "post",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            console.log(response.blob(), "Questions created!");
            document.location.replace("/");
        } else {
            alert(response.statusText);
        }
    // }
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
