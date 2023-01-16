const tall = []

for (let i = -10; i < 10; i++) {
    let x = Math.floor(Math.random() *100);
    if (Math.random() <0.5) {
        x = x*(-1);
    }
    tall.push(x);
}

let biggest = tall[0]
for ( let i = 1; i < tall.length; i++) {
    if (tall[i] > biggest){
        biggest = tall[i]
    }
}
console.log(tall)
console.log(biggest)