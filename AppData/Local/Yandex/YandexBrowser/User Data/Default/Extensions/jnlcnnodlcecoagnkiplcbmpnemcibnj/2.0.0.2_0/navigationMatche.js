/**
 * 
 */
NavigationMatchingScheme = function (navigationInstruction) {   
       
    this.REGEX = function () {
    	
    	//return true;
        return false;
    };
    
    this.EQUALS = function(){
    	
    	return false;
    }
    
    this.default = function () {
        console.log('error: the user does not have a role.');
        return false;
        };
    };
