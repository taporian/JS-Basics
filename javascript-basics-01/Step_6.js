function userInput(){
document.getElementById("user").submit();
var first_number = parseInt(document.getElementById("first_number").value);
var second_number = parseInt(document.getElementById("second_number").value);

var sum = first_number%second_number;
if(isNaN(sum)){
    alert("You can only insert numbers");
}
else{
    alert("The Remainder = "+sum);
}
}