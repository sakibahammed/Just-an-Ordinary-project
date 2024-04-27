// making HTTP request : 


async function fetchData(url){
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('http error! ')
        }
        const data = await response.json();
        return data;
    }catch(err){
        console.log('err fetching data : ',err);
    }
}




const apiUrl = `https://jsonplaceholder.typicode.com/todos/1`;
fetchData(apiUrl)
.then(data=>console.log(data))
.then(err=>console.error(err))