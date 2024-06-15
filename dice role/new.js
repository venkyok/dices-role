var randomNumber1=Math.floor(Math.random()*6)+1 ;
var randimg="dice"+randomNumber1+".png";
var randsrc="images/"+randimg;
var imge1=document.querySelectorAll("img")[0];
imge1.setAttribute("src",randsrc);    


let randomNumber2=Math.floor(Math.random()*6)+1;
let randimg2="dice"+randomNumber2+".png";
let randsrc2="images/"+randimg2;
let imeg2=document.querySelectorAll("img")[1];
imeg2.setAttribute("src",randsrc2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" palyer one wins!!"

}

else if (randomNumber1<randomNumber2){

    document.querySelector("h1").innerHTML=" palyer two wins!!";

}

else{

    document.querySelector("h1").innerHTML=" draw ";
}
