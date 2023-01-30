const tall = []

for (let i = -10; i < 10; i++) {
    let x = Math.floor(Math.random() *100);
    if (Math.random() <0.5) {
        x = x*(-1);
    }
    tall.push(x);
}
console.log(tall);
tall.sort(function(a, b){return a - b});
console.log(tall);
console.log(tall[0]);
console.log(tall[tall.length - 1]);