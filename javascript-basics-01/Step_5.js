function userInput(){
    document.getElementById("user").submit();
    var first_number = parseInt(document.getElementById("first_number").value);
    var second_number = parseInt(document.getElementById("second_number").value);
   
    var sum = second_number*first_number;
    if(isNaN(sum)){
        alert("You can only insert numbers");
    }
    else{
        alert("The Multiplication = "+sum);
    }
   

}