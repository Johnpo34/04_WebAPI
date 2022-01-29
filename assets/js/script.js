var quiz = [
    {
        question: "Javascript is a.",
        options: ['A Programming language', 'A type of cheese', 'A dog breed', 'The same as Java'],
        correct: 'A Programming language'
    },
    {
        question: "A boolean is a",
        options: ['a type of meant', 'a true false statement', 'a hat style', 'a string of words'],
        correct: 'a true false statement'
    },
    {
        question: "What does CSS style sheet do?",
        options: ['Provides answers', 'Makes a good sandwich', 'style and layout webpages', 'Shows correct musical notes'],
        correct: 'style and layout webpages'
    },
    {
        question: "A CSS styleshet is linked by",
        options: ['a source tag', 'a script tag', 'a div tag', 'a link tag'],
        correct: 'a link tag'
    },
    {
        question: "A Javascript sheet is linked by",
        options: ['a div tag', 'a link tag', 'a source tag', 'a script tag'],
        correct: 'a script tag'
    },
]

var startBtn = document.getElementById('start-btn')
var questionContainer = document.getElementById('question-container')
var optionsContainer = document.getElementById('options-container')
var timeContainer = document.getElementById('timer')

var quizIndex = 0
var score = 0
var time = 100


startBtn.addEventListener('click', function () {
    startBtn.setAttribute('class', 'hidden')
    startTimer()
    displayQuestion()
})

function startTimer() {
    // look into setInterval
    timeContainer.textContent = time
    var timer = setInterval(() => {
        time--
        timeContainer.textContent = time
        if (time == 0 || quizIndex > quiz.length - 1) {
            clearInterval(timer)
            endQuiz()
        }
    }, 1000);
}

function endQuiz() {
    console.log('quiz is over');
    questionContainer.textContent = ''
    optionsContainer.textContent = ''

    var input = document.createElement('input')
    input.setAttribute('placeholder', 'Enter Your Name')
    questionContainer.append(input)

    var button = document.createElement('button')
    button.textContent = 'Submit'
    questionContainer.append(button)

    button.addEventListener('click', function() {
        var user = {
            name: input.value,
            currentScore: score
        }
        var storage = JSON.parse(localStorage.getItem('highscores'))
        if (storage === null) {
            storage=[]
        }
        storage.push(user)
        localStorage.setItem('highscores', JSON.stringify(storage))
        window.location.href = 'highscores.html'
    })
}

function displayQuestion() {

    if (quizIndex > quiz.length - 1) {
        return
    }
    questionContainer.textContent = ''
    optionsContainer.textContent = ''

    questionContainer.textContent = quiz[quizIndex].question

    for (var i = 0; i < quiz[quizIndex].options.length; i++) {
        var optionBtn = document.createElement('button')
        optionBtn.setAttribute('id', quiz[quizIndex].options[i])
        optionBtn.textContent = quiz[quizIndex].options[i]
        optionsContainer.append(optionBtn)

        optionBtn.addEventListener('click', function (event) {
            if (event.target.id === quiz[quizIndex].correct) {
                console.log('correct')
                score += 20
            } else {
                console.log('incorrect')
                time -= 20
            }
            console.log(score);
            quizIndex++
            displayQuestion()
        })
    }
}



// var highscore= localStorage.getItem('Highscore')
// if(highscore !== null){
//     if (score > highscore) {
//         localStorage.setItem("highscore", score);      
//     }
// }
// else{
//     localStorage.setItem("highscore", score);
// }