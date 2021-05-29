function userInput(){
    document.getElementById("user").submit();
    
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value;
    alert("Hello "+firstname+" "+lastname);
}