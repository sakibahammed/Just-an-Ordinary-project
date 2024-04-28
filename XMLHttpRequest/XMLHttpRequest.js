// How the heck we can use XMLHttpRequest 

/*

    Creating an XMLHttpRequest 

        -> Start by creating an instance of the XMLHttpRequest object.

*/


const xhr = new XMLHttpRequest();


// Setting up the request. 

/*
    Configure the request by specifying the HTTP method and URL
*/


xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);


// the parameters are , method , URL , async flag (true for asynchronous).


// Setting up the event handlers : 

// add event handlers for different stages of the request.

xhr.onload = function(){
    if(xhr.status===200){
        console.log('Response:',xhr.responseText);
    }
    else{
        console.error('Error',xhr.status,xhr.statusText);
    }
};

xhr.onerror = function(){
    console.error('Network Error');
};

xhr.onreadystatechange = function(){
    if(xhr.readyState===4){
        // Request is complete
    }
}




// Sending the Request : Once the request is set up , send the request.

xhr.send();



// Optional Sending Data with a POST Request : 

// If you want to send data with POST request, set the request headers and include the data in send()


xhr.open('POST','https://api.example.com/data',true);
xhr.setRequestHeader('Content-Type','application/json');


const data = JSON.stringify({
    key:'value'
});

xhr.send(data)



// Handling CORS : 


/* 

    - If you are making request to different domain (CORS) , ensure the server supports CORS and returns appropriate headers to allow the request.

    - THis is usually handled server-side involves sending the correct headers such as access control allow origin.

*/