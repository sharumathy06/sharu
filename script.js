// GPA CALCULATOR

function calculateGPA(){

let credits=document.getElementById("credits").value;
let grade=document.getElementById("grade").value;

let gpa=credits*grade/credits;

document.getElementById("result").innerText="GPA : "+gpa;

}


// SHOW SECTIONS

function showSection(id){

document.getElementById("gpa").style.display="none";
document.getElementById("timer").style.display="none";

document.getElementById(id).style.display="block";

}


// DARK MODE

function toggleDark(){
document.body.classList.toggle("dark");
}


// TIMER

let time=1500;
let timer;

function startTimer(){

timer=setInterval(function(){

let minutes=Math.floor(time/60);
let seconds=time%60;

document.getElementById("time").innerText=
minutes+":"+(seconds<10?"0":"")+seconds;

time--;

if(time<0){
clearInterval(timer);
alert("Time is up!");
}

},1000)

}

function resetTimer(){

clearInterval(timer);
time=1500;
document.getElementById("time").innerText="25:00";

}