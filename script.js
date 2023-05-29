const jokeEL = document.getElementById('joke');
const jokebuttonEL = document.getElementById('jokeBtn');

jokebuttonEL.addEventListener('click', badAssJokeGenerator); 
badAssJokeGenerator();

async function badAssJokeGenerator(){
    const reqTheJoke = await fetch("https://icanhazdadjoke.com/", {
        headers:{
            'Accept':'application/json'
        }
    });
    const joke = await reqTheJoke.json();
    jokeEL.innerHTML = joke.joke;
}

document.addEventListener('keydown', (event) => {
    var key = event.keyCode;
    if(key == 13){
        badAssJokeGenerator();
    }
})