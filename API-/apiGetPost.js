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

/* 
    fetch(url) : makes a GET request to the specified URL

    await : is used to wait for the response to come back

    response.ok : checks if the response was successful.

    response.json() : the response is parse as JSON using response .json()

    if an error occurs the catch block handles it.



*/



// post api call


async function postData(url,data){
    try{

        const res = await fetch(url , {
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
        })

        if(!res.ok){
            throw new Error(`HTTP error! Status : ${res.status}`);
        }


        const responseData = await res.json();
        return responseData;
    }catch(err){   
        console.error('Error posting data : ', err);
    }
}




const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts';
const newPost ={
    title : 'my new post',
    body : 'this is the body of my new post.',
    userId : 1
};


postData(apiUrl,newPost)
    .then(data=>console.log(data))
    .catch(err=>console.error(error));

