
async function questionFormHandler(event) {
    event.preventDefault();
    const questionForm = document.getElementsByClassName("single-question");
    const data = [];

    //Add question and answer inputs to database
    for (let i of questionForm) {
        data.push({
            quiz_id: i.querySelector("#quiz-id").value.trim(),
            question_content: i.querySelector("#question-content").value.trim(),
            answer_a: i.querySelector("#answer-a").value.trim(),
            answer_b: i.querySelector("#answer-b").value.trim(),
            answer_c: i.querySelector("#answer-c").value.trim(),
            answer_d: i.querySelector("#answer-d").value.trim(),
            answer_correct: i.querySelector("#answer-correct").value.trim()
        })
    }


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
}


//Clone create question form
const question = document.getElementById("single-question");
const questionBlock = document.getElementById("question-block")
function addQuestion(event) {
    event.preventDefault();
    const newQuestion = question.cloneNode(true);
    console.log(newQuestion);
    questionBlock.appendChild(newQuestion);
}

//Submit quiz when submit button is clicked
document
    .querySelector("#submit-btn")
    .addEventListener("click", questionFormHandler);

//Add new question form when '+' button is clicked
document
    .querySelector("#add-question")
    .addEventListener("click", addQuestion);

