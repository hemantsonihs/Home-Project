function validateForm(){

    var name=document.getElementById("username").value.toUpperCase();
    var cname="HARSHVARDHANSONIHV@GMAIL.COM";

    var pass=document.getElementById("myPassword").value;
    var cpass="Soni@12345";

    // console.log(name);
    // console.log(pass);
    
    if(name == cname && pass == cpass){
        return true;
    }
    else{
        alert("Username or Passward Incorrect");
        // document.getElementsByClassName("formError").innerHTML="*";
        location.reload();
    }
    return false;
}

// function setError(id,error){
//     // set error inside tag of Id
//     element=document.getElementById(id);
//     element.getClassBYClass("formError");
//     element.innerHTML=error;
// }