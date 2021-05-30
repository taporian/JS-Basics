var hide = document.querySelector("#hide")
var show = document.querySelector('#show');
var text = document.querySelector('#texte');


function myFunction(){
hide.addEventListener("click", function(){
    text.style.display="none";
});
show.addEventListener("click",function(){
    text.style.display="block";
});

}
myFunction();
// function myFunction(){

// var x = document.getElementById('#texte');
// if(x.style.display="none"){
//     document.getElementsById('#texte').style.display = "block";
// }
// else{
//     // x.style.display="none";
//     document.getElementsById('#texte').style.display = "none";
// }
// // document.getElementsById('#show').style.display = "block";
// // document.getElementsById('#hide').style.display = "none";
// }