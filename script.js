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

function test3(){
    var x = 0;
    var z = 0;
    while (x++ < 10){
        z = x + z;
        // z += x++;
        console.log(z);
    }
}

function test4(){
    var x = 0;
    for(var i = 0; i < 10; i++){
        x = x + i;
        console.log(x);
    }
}

/* DO / WHILE LOOP IS IMPLEMENTED AT LEAST ONCE */

function doWhile(){
    x = 0;
    y = 0;
    do{
        x = x + y;
        y++;
        console.log(x);
    }
    while(y < 10);
}

function test5(){
    var s = 0;
    var i = 0;
    while(true){
        s=i++;
        console.log(s);
        if(i>20){
            break;
        }
    }
    console.log("PABAIGA");
}

function test6(){
    var s = 0;
    for(var i = 0; i <= 10; i++){
        console.log("cycle i " + i);
        console.log("cycle s " + s);
        s+=i;
        console.log("cycle sum " + s);
    }
    console.log("END s " + s);
    console.log("END i " + i);
}

function test7(){
    var s = 0;
    var i = 0;
    for(;i<=10;){ /*for loop variables can be set ousite. ";" are needed */
        s+=i++;
        console.log(s);
    }
    console.log("END");
}

function test8(){
    var s = 0;
    for(var i = 0; i < 100; i += 3){
        // console.log("cycle s - " + s);
        // console.log("cycle i - " + i);
        s += i;
        console.log("cycle sum - " + s);
    }
    console.log("CYCLE END");
}

function test9(m){
    var s = 0;
    var n = 1;
    for(var i = 0; i < 100; i += m){
        console.log("=== CYCLE " + n + " START ===");
        console.log("cycle s - " + s);
        console.log("cycle i - " + i);
        s += i;
        console.log("=== CYCLE " + n + " END ===");
        console.log("");
        n++;
    }
    console.log("=========");
    console.log("CYCLE END");
    console.log("=========");
}

function test10() {
    for(var i = 0, j=10; i<=j ; i++, j--){ /* IMPORTANT!!! FIRST - EVALUATION, SECOND - BLOCK, THIRD - ADDITION / ETC.!!! multiple variables can be declared in for loops */
        console.log(i,j);
    }
    console.log("END");
}


function test11(m,n){
    clear();
    for(var i = m; i <= n; i++){
        for(var j = m; j <= n; j++){
            console.log(i + " x " + j + " = " + (i * j));
            document.getElementById("try").innerHTML = (i + " x " + j + " = " + (i * j));
        }
        console.log("");
    }
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

console.log("=========");

// JEIGU LYGINAMI STRINGAI TADA LYGINA STRINGU SIMBOLIUS VIENA PO KITO PAGAL JU ASCII REIKSME.

var t1 = "67";
var t2 = "102";
if(t1>t2){
    console.log("t1");
} else {
    console.log("t2")
}

console.log("=========");

var b = t1 > t2
var t3 = 1;
var t4 = 5;

b = b & t3 < t4;

if(b){
    console.log("keista");
}else{
    console.log("ok");
}

console.log("=========");
