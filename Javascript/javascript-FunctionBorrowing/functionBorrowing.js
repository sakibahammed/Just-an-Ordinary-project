const completeMe = {
    firstName : 'sakib',
    lastName : 'ahammed',
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

const brokeMe = {
    firstName : 'Omar',
    lastName : 'ahammed'
}


// here completeMe object has the ability of fullname but the brokeMe object don't have the ability..
// we are going to borrow it.



console.log(completeMe.fullName.call(brokeMe));

/*

    we went to first object (completeMe) call the function that use call method with broke me
*/

//hello mom