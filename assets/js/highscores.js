var scoreContainer = document.getElementById('highscore-container')

var storage = JSON.parse(localStorage.getItem('highscores'))

if(storage === null) {
    scoreContainer.textContent = 'No Highscores'
} else {
    scoreContainer.textContent = ''
    for (var i = 0; i < storage.length; i++) {
        var userInfo = document.createElement('p')
        userInfo.textContent = 'Name: ' + storage[i].name + ' -------- ' + 'Score: ' + storage[i].currentScore
        scoreContainer.append(userInfo)
    }
}