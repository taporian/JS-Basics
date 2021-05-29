function userInput(){
    document.getElementById("user").submit();
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var city = document.getElementById("city").value;
    var myText=("Nom : "+name+"\n"+"Prenom : "+surname+"\n"+"Ville : "+city);
    alert(myText);

}