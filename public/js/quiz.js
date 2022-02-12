const question = document.getElementsByClassName("question");

for (let i = 0; i < question.length; i++) {


    question[i].addEventListener("click", function (event) {
        
        if (event.target.classList.contains("choice")) {
            const correct = question[i].querySelector("#correct");
            
            console.log(i, event.target.id);
            console.log(event.target.dataset.correct);
            if (event.target.id === event.target.dataset.correct) {
                correct.textContent = "correct!";
            } else {
                correct.textContent = "wrong!";
            }
            
        }
     
    })
}