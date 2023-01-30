let theSentence = "Rare måter å snakke på fra gamle dager"

let newSentene = hemmelig(theSentence);
let normalsentence = unkoko(hemmeligsentence)

function hemmelig(sentence){
   let konsonants = "bcdfghjklmnpqrstvwxz"
   let newTeskt = ""
    for (let i = 0; i < sentence.length; i++) {
      let letter = sentence[i]
      if (konsonants.indexOf(letter.toLowerCase())> -1 ){
        newTeskt += letter + "o" + letter
      }
      else {
        newTeskt += letter
      }

    }
  return newTeskt
}
function unkoko(hemmeligsentence){
    let constents = "bcdfghjklmnpqrstvwxz"
    let normalsentence = ''

    let i = 0
    while (i<hemmelig.length){
        let letter = hemmeligsentence[i]
        if (constents.indexOf(letter.toLowerCase())> -1){
            normalsentence += letter
            i+=3

        } else{
            normalsentence += letter
            i++
        }
    }
    console.log(normalsentence)
    return(normalsentence)
}


