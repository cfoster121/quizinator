const question = document.getElementsByClassName("question");

for (let i = 0; i < question.length; i++) {


    question[i].addEventListener("click", function (event) {
        
        if (event.target.classList.contains("choice")) {
            const correct = question[i].querySelector("#correct");
            const choices = event.target.parentNode.getElementsByClassName("choice");
            for (let choice of choices) {
                choice.classList.remove("bg-slate-500");
                choice.classList.add("hover:bg-slate-500");
            }
            console.log(event.target);
            // console.log(i, event.target.id);
            // console.log(event.target.dataset.correct);
            event.target.classList.add("bg-slate-500");
            event.target.classList.remove("hover:bg-slate-300");
            if (event.target.id === event.target.dataset.correct) {
                // correct.textContent = "correct!";
                question[i].classList.add("yes");
                question[i].classList.remove("no");

            } else {
                // correct.textContent = "wrong!";
                question[i].classList.add("no");
                question[i].classList.remove("yes");
            }
            
        }
     
    })
}