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
    
    // CHECK VALID E-MAIL 
	var verifyEMail = function (string){
	    var pattern = /^\w+@[\w.\-]+\.[A-Za-z]{2,3}$/;
	    return pattern.test(string);
    }
    
    
        // CHECK VALID URL 
	var verifyUrl = function (string){
	    var pattern = /^(?:http|https):/;
	    return pattern.test(string);
    }
    
    
        // CAPS EVERY FIRST LETTER OF A WORD
        // CAPS EVERY FIRST LETTER OF A WORD
        var capFirstLet = function (string){
		var split = string.split(" ");
		var outcome = "";
		for (var i = 0, j = split.length; i < j; i++) {
			var strSplitt = split[i].replace(split[i].charAt(0),(split[i].charAt(0)).toUpperCase());
			outcome = outcome.concat( strSplitt + " ");
		};
		return outcome;
	}
        
        // CHECK NUMERIC FUNCTIONS: string2Num, formatNumber
        // CHANGE STRING TO NUMBER
        var string2Num = function (number){
            return Number(number);
        }

    return {
        
        //REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
        //"checkNum": checkNum,
        //"areyouEd": areyouEd,
        //"checkString": checkString,
        //END OF REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
        "verifyNum"  : verifyNum,
        "verifyEMail": verifyEMail,
        "verifyUrl"  : verifyUrl,
        "capFirstLet": capFirstLet,
        "string2Num" : string2Num
       
        }
}


var newLib = new myLibrary();
//REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
//console.log("How the Module Works: " + newLib.checkNum(156));
//console.log("How the name function works: " + newLib.areyouEd("Ed"));
//console.log("The dash is in posotion: " + newLib.checkString("1234-56"));
//END OF REVEALING MODULE PATTER EXERCISE NOT A SOLVED PROBLEM. EXERCISE ONLY
console.log("Is NaM a number?: " + newLib.verifyNum("123-456-7890"));
console.log("Is e-mail valid?: " + newLib.verifyEMail("eddavila@fullsail.edu"));
console.log("Is URL valid?   : " + newLib.verifyUrl("http://valid.com"));
console.log("First letter must always be upper case:" + newLib.capFirstLet(" eddy omar davila"));
console.log('Data type change from string "42" to number ' + newLib.string2Num("42"));

