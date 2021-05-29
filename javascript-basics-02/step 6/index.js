for(i=1;i<6;i++){
    imageNumber="#image"+i.toString();
    document.write(imageNumber);
    let img = document.querySelector(imageNumber);
    
      img.addEventListener("mouseover", function() {
      // document.querySelector(imageNumber).src = "images/image"+i.toString()+"_2.jpg";
      document.querySelector("#image1").src = "images/image1_2.jpg";
      document.querySelector("#image2").src = "images/image2_2.jpg";
      document.querySelector("#image3").src = "images/image3_2.jpg";
      document.querySelector("#image4").src = "images/image4_2.jpg";
      document.querySelector("#image5").src = "images/image5_2.jpg";
      })
  }
  for(i=1;i<6;i++){
    imageNumber="#image"+i.toString();
    document.write(imageNumber);
    let img = document.querySelector(imageNumber);
    
      img.addEventListener("mouseout", function() {
      // document.querySelector(imageNumber).src = "images/image"+i.toString()+"_2.jpg";
      document.querySelector("#image1").src = "images/image1.jpg";
      document.querySelector("#image2").src = "images/image2.jpg";
      document.querySelector("#image3").src = "images/image3.jpg";
      document.querySelector("#image4").src = "images/image4.jpg";
      document.querySelector("#image5").src = "images/image5.jpg";
      })
  }