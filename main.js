window.onload=function(){console.log('win');
displayTime();

}
function displayTime(){
let currentTime=new Date();
let hrs=currentTime.getHours();
if (hrs > 12){
document.getElementById("digitalClock").innerHTML =
`${currentTime.getHours()-12}:${currentTime.getMinutes()}:${currentTime.getSeconds()}PM`;
}
else{
document.getElementById("digitalClock").innerHTML =
`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}AM`;
}
}


