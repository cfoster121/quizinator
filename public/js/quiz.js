const question = document.getElementsByClassName("question");
const showAnswers = document.getElementById("show_answers");
const results = document.getElementById("results");
const user_id = document.querySelector("#user-id").value;
const quiz_id = document.querySelector("#quiz-id").value;

for (let i = 0; i < question.length; i++) {


    
    
    var choiceListener = function(event) {
        
        if (event.target.classList.contains("choice")) {
            const correct = question[i].querySelector("#correct");
            const choices = event.target.parentNode.getElementsByClassName("choice");
            for (let choice of choices) {
                choice.classList.remove("bg-slate-500");
                choice.classList.remove("selected");
                choice.classList.add("hover:bg-slate-300");
            }
            console.log(event.target);
            event.target.classList.add("bg-slate-500");
            event.target.classList.add("selected");
            event.target.classList.remove("hover:bg-slate-300");
            if (event.target.id === event.target.dataset.correct) {
                question[i].classList.add("correct");
                question[i].classList.remove("incorrect");

            } else {
                question[i].classList.add("incorrect");
                question[i].classList.remove("correct");
            }
            
        }
     
    }
    question[i].addEventListener("click", choiceListener);
}
async function showScore(score) {

    results.innerHTML = `You Got ${score}/${question.length} answers correct!`;
    const response = await fetch(`/api/highscore/`, {
        method: "post",
        body: JSON.stringify({
            score,
            quiz_id,
            user_id,
            
        }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        const data = await response.json();
        console.log(response);
        // document.location.replace(`/highscore/${quiz_id}`);

    } else {
        alert(response.statusText);
    }
}

showAnswers.addEventListener("click", function(event) {
    event.preventDefault();

  
    let correctAnswers = 0;
    console.log(event);
    if (this.textContent === "High Scores") {
        document.location.replace(`/highscore/${quiz_id}`);
    } else {     
        for (let i = 0; i < question.length; i++) {

            //removes event listeners by cloning the question
            const questionClone = question[i].cloneNode(true);
            question[i].parentNode.replaceChild(questionClone, question[i]);


            const choices = question[i].getElementsByClassName("choice");
            
            for (let choice of choices) {
                if (choice.id === choice.dataset.correct) {
                    choice.classList.add("bg-lime-500");
                }
                
                choice.classList.remove("hover:bg-slate-300");
               
                if (choice.classList.contains("selected") && question[i].classList.contains("correct")) {
                    
                    correctAnswers++;
                }
                if (choice.classList.contains("selected") && question[i].classList.contains("incorrect")) {
                    
                    choice.classList.add("bg-red-500");
                
                    
                }
            }

        }
    }
    showScore(correctAnswers);
    this.textContent = "High Scores";

});