// Eddy Davila
// SDI 1303
// Project 4

//Visual Frameworks Library Functions

//REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
var myLibrary = function(){
    
/*    // CHECK NUMERIC F
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
    var checkString = function(val){
        
        var strLen = val.length;
        for (var i=0; i <=strLen ;  i++) {
            if (val.substring(i, i+1) === "-") {
                return i+1;
            }
        }
    }*/
    // END OF REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
    
    
    //ASSIGNMENT 4
    
    //CHECK STRING FUNCTIONS: verifyNum, verifyEMail, verifyUrl, capFirstLet.
    // CHECK VALID PHONE NUMBER
    var verifyNum = function (string) {
		var pattern = /\d{3}-\d{3}-\d{4}/;
		return pattern.test(string);
            
    }
    

    return {
        
        //REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
        //"checkNum": checkNum,
        //"areyouEd": areyouEd,
        //"checkString": checkString,
        //END OF REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
        "verifyNum": verifyNum,
       
        
        
    }
}


var newLib = new myLibrary();
//REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
//console.log("How the Module Works: " + newLib.checkNum(156));
//console.log("How the name function works: " + newLib.areyouEd("Ed"));
//console.log("The dash is in posotion: " + newLib.checkString("1234-56"));
//END OF REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
console.log("Valid entry is:" + newLib.verifyNum("123-456-7890"));


