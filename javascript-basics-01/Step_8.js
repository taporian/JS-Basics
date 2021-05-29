function userInput(){
    document.getElementById("user").submit();
    var age = parseInt(document.getElementById("age").value);
    
    if(isNaN(age)){
        alert("You can only insert numbers");
    }
    else if(age>18){
        alert("you are over 18");
    }
    else{
        alert("you are under 18");
    }
    }