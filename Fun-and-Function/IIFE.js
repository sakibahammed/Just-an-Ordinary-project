// example of IIFE  : 

    (function(){
        console.log('Hello MOM');
    })();// here () by default call it self immediately as soon as the function is declared. 
    // () adding this thing in the function by default call the function and this thing make a function IIFE. 

    // arrow IIFE 

    (()=>{
        console.log('hello world');
    })();

    // async one 

    (async ()=>{
        console.log('hello mom');
    })();



    // avoid polluting the global namespace : 

    (()=>{
        let firstVariable;
        let lastVariable;
    })();

    // console.log(firstVariable); cannt access


    // executing an async function : 

        const getFileStream = async (url)=>{
            
        }

        (async ()=>{
            const stream = await getFileStream("https://domain.name/path/file.ext");
            for await(const chunk of stream){
                console.log({ chunk });
            }
        })();




    