var a= document.querySelector("H1")
console.log(a);
a.innerHTML='hello friends here we are for learnig js'
a.style.backgroundColor="red"
a.innerHTML="hello"
a.style.color='white';
a.style.fontSize ="55px";
a.addEventListener("click",function(){
    console.log("click hua");
    a.innerHTML="java script is best for frontend development";
})
//bulb
var flag=0;
var bulb =document.querySelector(".bulb")
var b= document.querySelector("button");
b.addEventListener("click",function(){
if(flag==0){
    bulb.style.backgroundColor="yellow";
    flag=1;
}
else{
    bulb.style.backgroundColor="white";
    flag=0;
}
})


//2bulb
var bulb2=document.querySelector("#bulb");
var buttonon =document.querySelector("#on");
var buttonoff = document.querySelector("#off");
buttonon.addEventListener("click",function(){
    bulb2.style.backgroundColor="yellow";
})
buttonoff.addEventListener("click",function(){
    bulb2.style.backgroundColor="white";
})