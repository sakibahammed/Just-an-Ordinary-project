// how the heck this async await works : 


async function fetchData(url){
    try{
        const response = await fetch(url);

        const data = await response.json();

        return data;
    }catch(err){
        console.log('error fetching data : ', err);
    }

}


async function main(){
    const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');

    console.log(data);
}


main()