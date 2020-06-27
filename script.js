function runBack(){
    var val =document.cal.display.value.slice(0, -1);
    document.cal.display.value = val;
};

function calcsqrt() 
{
	var number=cal.display.value;
    var ans=Math.sqrt(number);
	if (number=0) ans="Invalid";
	cal.display.value=ans;
}

function calcuberoot(){
    var number=cal.display.value;
    var ans=Math.cbrt(number);
    if (number=0) ans="Invalid";
	cal.display.value=ans;
}

function square(){
var number=cal.display.value;
var ans= number*number;
cal.display.value=ans;
}

function cube(){
    var number=cal.display.value;
    var ans= number*number*number;
    cal.display.value=ans;
}

function inverse(){
    var number=cal.display.value;
    var ans= 1/number;
    cal.display.value=ans;
}

function half(){
    var number=cal.display.value;
    var ans= number/2;
    cal.display.value=ans;
}

function myintro(){
    var x=document.getElementById("hide");
    x.style.display = "none";
    var y=document.getElementById("myintro");
    y.style.display="block";
}