
    outerLoop: for(let i=0;i<3;i++){
        innerLoop: for(let j=0;j<3;j++){
            break outerLoop;
        }

        console.log(i);
    }