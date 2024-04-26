// function getReactArea(width , height){
//     if(isNaN(width) || isNaN(height)){
//         throw new Error('parameter is not a number');
//     }
// }

// try{
//     getReactArea(3,'A');
// }
// catch(e){
//     console.error(e);
// }



//Throw statement ;

// function validateEmail(email){
//     if(!email.includes('@')){
//         console.log('hello mom');
//         throw new Error('invalid email address');
        
//     }
// }

// try{
//     validateEmail('example.com');
// }catch(e){
//     console.log('its error');
// }




// function getElementFromArray(array , index){
//     if(index<0 || index>array.length){
//         throw new Error('index out of bound');
//     }
//     return array[index];
// }

// try{
//     let myArray = [1,2,3];
//     getElementFromArray(myArray,0);
// }catch(error){
//     console.log(error.message); 
    
// }



// most easy method


// function checkNumber(num){
//     if(num > 10){
//         console.log(`${num} is greater than 10`);
//     }

//     else{
//         throw new Error(`${num} is not greater that 10`);
//     }

// }


// try{
//     checkNumber(15);
//     checkNumber(5);
// }catch(error){
//     console.error(error.message);
// }

// 















