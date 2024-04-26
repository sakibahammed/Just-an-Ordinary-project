function fetchData(url , callBack){
    setTimeout(()=>{
        const data = `data from ${url}`;
        setTimeout(()=>{
            const data  = `Data from ${url}`
        },2000);
        callBack();

    },2000);
}


function processData(data){
    console.log('process data : ',data);

}

fetch('https://api.example.com', processData);