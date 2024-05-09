
  const toyotaCar = {
    color : 'blue',
    drive : function(){
      setTimeout(()=>{
        console.log(`the ${this.color} car is driving `);
      },5000);
    }
  }


  toyotaCar.drive()