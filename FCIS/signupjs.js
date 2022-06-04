function pass() {
    var a = document.getElementById("passwords").value;
    if (a == "") {
        document.getElementById("errorpassword").innerHTML = "*Please Fill out this field And Write Your Password";
        return false;
    }
    else if (a.length < 5) {
        document.getElementById("errorpassword").innerHTML = "*Your Password must be Greater than 5 Digits";
        return false;
    }
    else if (a.length > 25) {
        document.getElementById("errorpassword").innerHTML = "*Your Password must be Less than 25 Digit";
        return false;
        
    }
    else
    {
        document.getElementById("errorpassword").innerHTML = "";
        return true;
    }
}
function repass()
{
    var a = document.getElementById("passwords").value;
    var b = document.getElementById("repassword").value;
    if (b == "") {
        document.getElementById("errorrepassword").innerHTML = "*Please Fill out this field And Write Your Password Again";
        return false;
    }
    
    else if (a != b) {
        document.getElementById("errorrepassword").innerHTML = "*Password is not the Same";
        return false;
    }
    else {
        
            document.getElementById("errorrepassword").innerHTML = "";
            return true;
        

    }
}

/*function Phonee()
{
    var a = document.getElementById("phone").value;
    var isnum = /^[0-9]+$/.test(a);
    if(isnum ==false)
    {
        document.getElementById("errorphone").innerHTML = "*Phone Number Accpeted Numbers only";
        return false;
    }
    else
    {
        document.getElementById("errorphone").innerHTML = "";
        return true;
    }
    
}*/
function checksubmit(a,b)
{
    if (a === true && b === true ) {
        alert("Submit Successful");
        return true;
    }
    else
        return false;
}