let quiz = document.getElementById('quiz-form');

quiz.addEventListener('submit', function (ev) {
    ev.preventDefault(); //le quizz ne se soumet pas par defaut

    let questions = document.querySelectorAll('.question-item');
    let toutcorrecte = true;

    questions.forEach(function (question) {
        let correctAnswer = question.querySelector('.answer[value="true"]');
        let repchoisi = question.querySelector('.answer:checked');
        let Correct = repchoisi === correctAnswer;

        let textColor;
        if (Correct) {
            textColor = 'green';
        } else {
            textColor = 'red';
            toutcorrecte = false;
        }

        question.style.color = textColor;
    });

    if (toutcorrecte) {
        let congratulation = document.createElement('div');
        congratulation.id = 'alerte';  
        congratulation.innerHTML = '<div class="alert-title">Congratulations!!</div>You got them all right!';
        congratulation.classList.add('congrats-container');
    
        document.body.appendChild(congratulation);
    }
});
