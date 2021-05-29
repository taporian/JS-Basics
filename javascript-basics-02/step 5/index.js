// c=1;

// test="#image"+c.toString();
// document.write(test)
// let img = document.querySelector(test);
// let start = img.src="images/image1.jpg";
// // let hover = img.src="images/image1_2.jpg";

// img.onmouseover= function () {
//     img.src ="images/image1_2.jpg";
// }
// i=1;
// imageNumber="#image"+i.toString();
// document.write(imageNumber)



///Didn't know how to loop with imagenumber


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
    

    
//    for(j=1;j<2;j++){
//     img.onmouseover = function(){
        
//         x="images/image"+i.toString()+"_"+j.toString()+".jpg";
//         img.src ="images/image"+j.toString()+"_2.jpg";
//         img.src ="images/image2_2.jpg";
//         img.src ="images/image3_2.jpg";
//         img.src ="images/image4_2.jpg";
//         img.src ="images/image5_2.jpg";
//     //   img.src="x";
     
//   }
// }


// let imgages = document.querySelectorAll('.container');
// for(let img of images){
//     img.onmouseover= function () {
//             img.src ="images/image1_2.jpg";
//         }
// }


   
    
    // for (i=0;i<6;i++){
    //     x[i] = document.querySelector("#image"+i.toString());
    //     x.omouseover = function(){
    //         x.src ="images/image1_2.jpg";
    //     }
    // }

