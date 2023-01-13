let lengde = Math.floor((Math.random()* 8) +3);
let alfabet = 'abcdefghijklmnopqrstuvwxyzæøå';
let ord ="";

//console.log(alfabet.length);
//console.log(alfabet.charAt(random));

for (let i = 0; i < lengde; i++) {
    let random = Math.floor((Math.random()* alfabet.length));
    ord+= alfabet.charAt(random);
}

console.log(ord);