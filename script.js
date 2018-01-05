// console.log("console hello");
//
// alert("hello world");

var var1;
var var2;
var var3;

var a = "Hello";
var b = "World";
var c = a + " " +  b;

function newLog(){
    a = prompt("New console log?");
    console.log("New console.log - " + a);
}

function veiksmas(){
    var1 = Number(prompt("First number?"));
    var2 = Number(prompt("Second number?"));
    var3 = var1 + var2;
    console.log("Sum is equal to - " + var3);
}

function veiksmas2(){
    var x = Number(prompt("First number?"));
    var y = Number(prompt("Second number?"));
    console.log("x is " + isNaN(x));
    console.log("x is " + isNaN(y));
    if(isNaN(x) === true || isNaN(y) === true){
        console.log("ERROR");
    }else{
        console.log(x+y);
    }
}

function whileLoop(x,y){
    while(++x<y){
        console.log("LOOP CYCLE " + x);
    }
    x += 3;
    console.log("LOOP END " + x);
}

function forLoop(x){
    for(var i = 0; i <= x; i++){
        console.log(i);
    }
}

function test2(){
    var x = 0;
    while (++x < 5){ /* ++x - first add 1 then evaluate, x++ - first evaluate then add */
        console.log(x);
    }
    console.log("palanga " + x);
}

// console.log("variable 1 - " + var1);
// console.log("variable 2 - " + var2);
// console.log("variable 3 - " + var3);

// var a = 1/3;
// console.log(a);
// console.log(a*3);

// SVARBU - pabaigoje lieka 3
// console.log(2.2*0.1);
//
// console.log(c);

// BACKSLASHAS "\" - ESCAPE CHARACTER
// console.log("hello my \"friend\" and \\\\\\");

/* TWO WAYS OF COMMENTS */
// COMMENTS OUT THE WHOLE LINE

// var n = "text";
// var t = 5;
// var l = true;
// console.log(n + l);

// JAVASCRIPT USES ADAPTIVE CONVERSION OF VARIABLES. NUMBER + BOOLEAN, THEN BOOLEAN = NUMBER AND ETC.

var m;

function test(t){
    if(t>5){
        console.log("MORE");
    }else{
        console.log("LESS");
    }
    m = t;
}

// var r = 5;
//  if (r>10)
//  console.log("didelis");
//  else
//  console.log("mazas");

var h = "-12";
if (h>10)
console.log("didelis");
else if(h>=0)
console.log("vidutinis");
else if(h<=0)
console.log("neigiamas");
else
console.log("NaN");

console.log("=========")

// JEIGU LYGINAMI STRINGAI TADA LYGINA STRINGU SIMBOLIUS VIENA PO KITO PAGAL JU ASCII REIKSME.

var t1 = "67";
var t2 = "102";
if(t1>t2){
    console.log("t1");
} else {
    console.log("t2")
}

console.log("=========")

var b = t1 > t2
var t3 = 1;
var t4 = 5;

b = b & t3 < t4;

if(b){
    console.log("keista");
}else{
    console.log("ok");
}

console.log("=========")



console.log("=========")
