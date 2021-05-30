var password = document.querySelector('#password');
var confirmation = document.querySelector('#confirmation');
var button = document.querySelector('button');

function myFunction(){
    button.addEventListener("click", function(){
        if(password.value!=confirmation.value){
            confirmation.style.border= "thick solid red";
            password.style.border= "thick solid red";
        }
    })
}
myFunction();

