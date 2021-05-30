var green = document.querySelector('.green');
var red = document.querySelector('.red');
var blue= document.querySelector('.blue');
var text = document.querySelector('#text');


function myFunction(){
    green.addEventListener("click", function(){
        
        text.style.color="green";
    });
    red.addEventListener("click",function(){
        text.style.color="red";
    });
    blue.addEventListener("click",function(){
        text.style.color="blue";
    });

    // show.addEventListener("click",function(){
    //     text.style.display="block";
    // });
    
    }
    myFunction();