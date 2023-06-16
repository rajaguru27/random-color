var btn =document.getElementById("btn-color");
var colorChng = document.getElementById("color");



btn.addEventListener("click",function(){
var a=["red","pink","yellow","blue","brown","green","grey","violet","orange"];
var click=Math.round(Math.random()*a.length);

colorChng.style.backgroundColor = a[click];



})
