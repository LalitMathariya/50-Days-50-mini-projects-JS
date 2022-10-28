const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

generateJoke()
//here we use sync await keyword method to fetch api data
async function generateJoke(){

    const config = {
            headers:{
                'Accept':'application/json',
            },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    jokeEl.innerHTML = data.joke
}




//This is done using fetch method 
// function generateJoke(){

//     const config = {
//             headers:{
//                 'Accept':'application/json',
//             },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(res => res.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }