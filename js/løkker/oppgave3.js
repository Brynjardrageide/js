function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomString = randomNumber(3, 10)
let word =""
for(let i = 0; i < randomString; i++) {
    word += "#";
    console.log(word);
}