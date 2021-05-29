



document.querySelector("button").addEventListener("click", function(){
    if((confirm("Are You Sure You Want to Clear all Field ?"))){

    
    document.querySelector('#name').value="";
    document.querySelector('#surname').value="";
    document.querySelector('#city').value="";
    }
})