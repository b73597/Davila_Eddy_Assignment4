// Eddy Davila
// SDI 1303
// Project 4

//Visual Frameworks Library Functions

// REVEALING MODULE PATTER EXERCISE.
var myLibrary = function(){
    
    // CHECK NUMERIC F
    var checkNum = function(val){
        if (isNaN(val)) {
            return false;
        } else {
            return true;
        }
    }


    // CHECK NAME F



    // CHECK STRING PATTERN

    return {
        "checkNum": checkNum
        
    }
}


var newLib = new myLibrary();
console.log("Valid Number is: " + newLib.checkNum(156));

