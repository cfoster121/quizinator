const question = document.getElementsByClassName("question");
const showAnswers = document.getElementById("show_answers");

for (let i = 0; i < question.length; i++) {


    
    
    var choiceListener = function (event) {
        
        if (event.target.classList.contains("choice")) {
            const correct = question[i].querySelector("#correct");
            const choices = event.target.parentNode.getElementsByClassName("choice");
            for (let choice of choices) {
                choice.classList.remove("bg-slate-500");
                choice.classList.remove("selected");
                choice.classList.add("hover:bg-slate-300");
            }
            console.log(event.target);
            // console.log(i, event.target.id);
            // console.log(event.target.dataset.correct);
            event.target.classList.add("bg-slate-500");
            event.target.classList.add("selected");
            event.target.classList.remove("hover:bg-slate-300");
            if (event.target.id === event.target.dataset.correct) {
                // correct.textContent = "correct!";
                question[i].classList.add("correct");
                question[i].classList.remove("incorrect");

            } else {
                // correct.textContent = "wrong!";
                question[i].classList.add("incorrect");
                question[i].classList.remove("correct");
            }
            
        }
     
    }
    question[i].addEventListener("click", choiceListener);
}


showAnswers.addEventListener("click", function(event) {
    
    console.log(event);
    for (let i = 0; i < question.length; i++) {
        question[i].removeEventListener("click", choiceListener);
        const choices = question[i].getElementsByClassName("choice");
        // console.log(question[i].classList.contains("correct"));
        // console.log(choices);
        for (let choice of choices) {
            choice.classList.remove("hover:bg-slate-300");
            console.log(choice);
            if (choice.classList.contains("selected") && question[i].classList.contains("correct")) {
                choice.classList.add("bg-lime-500");
            }
            if (choice.classList.contains("selected") && question[i].classList.contains("incorrect")) {
                choice.classList.add("bg-red-500");
            }
        }

    }
});