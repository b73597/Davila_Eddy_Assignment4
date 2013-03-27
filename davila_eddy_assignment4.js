// Eddy Davila
// SDI 1303
// Project 4

//Visual Frameworks Library Functions

// REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
var myLibrary = function(){
    
    // CHECK NUMERIC F
    var checkNum = function(val){
        if (isNaN(val)) {
            return false;
        } else {
            return true;
        }
    }


    // CHECK NAME FUNCTION 
    var areyouEd = function(val) {
        if (val === "Ed") {
            return true;
        }else {
            return false;}
        
    }



    // CHECK STRING PATTERN

    return {
        "checkNum": checkNum,
        "areyouEd": areyouEd
        
    }
}


var newLib = new myLibrary();
console.log("How the Module Works: " + newLib.checkNum(156));
console.log("How the name function works: " + newLib.areyouEd("Ed"));

