let length =  3 + Math.floor(Math.random() * 7);
let figurTall ="";
for (var i = 1; i <= length; i++) {
    if (i< length) {
    figurTall += generateString(i) + ' - ';
    } else {
        figurTall += generateString(i)
    }
}

function generateString(n) {
    thestring = "";
    for (var i = 0; i < n; i++) {
        thestring += "#";
    }

    return thestring;
}

console.log(figurTall);