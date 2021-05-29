function userInput(){
    document.getElementById("user").submit();
    var shoesize = parseInt(document.getElementById("shoe_size").value);
    var year = parseInt(document.getElementById("year").value);
   
    var final=(year - (((shoesize*7)+5)*50))+1766;
    
    
    
    if(isNaN(final)){
        alert("You can only insert numbers");
    }
    else{
        alert("Result = "+final);
    }
    }