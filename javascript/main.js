// let index =1;

// alisher1234(index)

// function alisher1234(a){
//            let slider = document.getElementsByClassName("slider");
//            let chiziq = document.getElementsByClassName("chiziq");
//              console.log(slider.length)
//            if(a>slider.length){
//              index = 1;
//            }
//            if(a<1){
//                index = slider.length;
//            }

//            for(let i=0; i<slider.length ; i++){
//                slider[i].style.display = "none";
//            }
//            for(let i=0; i<chiziq.length; i++){
//             chiziq[i].className = chiziq[i].className.replace(" active", "");
//            }

//            slider[index-1].style.display = 'block';
//            chiziq [index-1].className += (" active")
// }



// function goNext(a){
//     alisher1234(index = index+a);
// }
// function goChiziq(a){
//     alisher1234(index = a);
// }

let indexValue = 1; 
showImg(indexValue);
function goChiziq(e){
    showImg(indexValue = e);
}
function goNext(e){
    showImg(indexValue += e);
}
function showImg(e){
   let slider = document.querySelectorAll('.slider');
   let chiziq = document.querySelectorAll(".chiziqlar .chiziq");
if(e > slider.length){
    indexValue = 1;
}
if(e<1){
    indexValue = slider.length
}
for(let i=0; i<slider.length; i++){
    slider[i].style.display = "none";
}

for(let i=0; i<chiziq.length; i++){
       chiziq[i].style.background = 'transparent';
}
slider[indexValue-1].style.display = "block";
 chiziq[indexValue-1].style.background = "white";
}