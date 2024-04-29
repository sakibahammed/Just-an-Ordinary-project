// Fetch API looks like this , 


async function logMovies(){
    const response = await  
        fetch('"http://example.com/movies.json"');
        const movies = await response.json();
        console.log(movies);
}




// simple fetch()

const url = `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch`;

fetch(`https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch`)
.then(res=>res.json())
.then(data=>console.log(data))