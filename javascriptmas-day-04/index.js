const jokeIn = document.getElementById('joke-in');
const jokeOut = document.getElementById('joke-out');

document.getElementById('window-container').addEventListener('click', function () {
    fetch('https://v2.jokeapi.dev/joke/Christmas')
        .then(response => response.json())
        .then(data => {
            jokeIn.innerText = `${data.setup}`
            jokeOut.innerText = `${data.delivery}`
    });
 
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
});