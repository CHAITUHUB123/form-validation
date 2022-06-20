function validateForm() {
	 var fname = document.MyForm.fname.value;
	 

}
 var fnameErr = true;

  // Validate first name

    if(name == "") {
        printError("fnameErr", "Please enter your first name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("fnameErr", "Please enter a valid  first name");
        } else {
            printError("fnameErr", "");
            fnameErr = false;
        }
    }
    if(fnameErr == true){
    	return false;
    }
    
    else
    {
    	 // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "First Name: " + name + "\n" +
    }
    