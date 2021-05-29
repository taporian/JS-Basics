// let x = document.querySelector('#name');
// x.onblur= function(){
//     document.write("thank you for participating!");
// }

// if(x.onblur()==0){
//     document.write("thank you for participating!");
// }

document.getElementById("name").addEventListener("change", function(){
    let x = document.querySelector('#name').value;
    document.getElementById("div").innerHTML = x;
})