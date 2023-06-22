
var nValue,rValue,nV,rV,alertt;

// "RAW INPUT" BY USERS IE NUMBER OF TEXT FORM THAT ARE TO BE INTEGERIFIED

nValue = document.getElementById("nValue");
rValue = document.getElementById("rValue");

// "INTEGRAL FORM" OF USER INPUT

nV = Number(nValue.value);
rV = Number(rValue.value);

// PARA SHOWING THE "RESULTS", STATUS, VALIDITY, ETC. OF THE USER INPUT 

alertt = document.querySelector("#alert");

// FUNCTION THAT FINDS PERMUTATIONS OF THE GIVEN SET OF NUM

function npr(){
    nV = Number(nValue.value);
    rV = Number(rValue.value);

    alertt = document.querySelector("#alert");

    var n = 1; 
    var r = 1;
    var nr = 1; 
    var nrV = nV-rV;
    
    for (var i = 1; i <= nV; i++) {n *= i}
    for (var j = 1; j <= rV; j++) {r *= j}
    for (var k = 1; k <= nrV; k++) {nr *= k}
    
    if (nV == "" || rV == "") {
        alertt.innerHTML = "Buddhu pehle fill toh karo !!";
    }
    else if (nV < 1 || rV < 1) {
        alertt.innerHTML = "Only put positive numbers, kyuki negative numbers ke factorial nhi hote !!"
    }
    else {
        alertt.innerHTML =         `
        ${nV}!/(${nV}-${rV})!
        =
        ${n/nr}
        `   
   // n!/(n-r)!
    }
}

function ncr(){
    nV = Number(nValue.value);
    rV = Number(rValue.value);

    var n = 1, r = 1, nr = 1, nrV = nV-rV;

    for (var i = 1; i <= nV; i++) {n *= i}
    for (var i = 1; i <= rV; i++) {r *= i}
    for (var i = 1; i <= nrV; i++) {nr *= i}

    if (nV == "" || rV == "") {
        alertt.innerHTML = "Buddhu pehle fill toh karo !!"
    }
    else if (nV < 1 || rV < 1) {
        alertt.innerHTML = "Only put positive numbers, kyuki negative numbers ke factorial nhi hote !!"
    }
    else {
        alertt.innerHTML =
        `
        ${nV}!/(${rV}!*(${nV}-${rV})!)
        =
        ${n/(r*nr)}
        `   
   // n!/(r!(n-r))!
    }
}

function reset() {
    nValue.value = "";
    rValue.value = "";
    alertt.innerHTML = "";
}
