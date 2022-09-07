
document.getElementById("input").addEventListener("input",function (e){
let C=e.target.value;
document.getElementById("FOutput").innerHTML=((C*1.8)+32).toFixed(2);


})