let length = Math.floor((Math.random() * 100) + 1);

for (var i = 0; i < length; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("Fizzbuzz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    }else {
        console.log(i);
    }
}