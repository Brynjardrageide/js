let age = Math.floor(Math.random() * 20) + 1;   
if (age>=18) {
    console.log("gi melding om at man kan ta sertifikat på bil, og stemme ved")
    console.log("gi melding om at man kan ta lappen på moped/lett motorsykkel.")
    console.log("gi melding at man begynne å øvelseskjøre")

}else if (age>=16){
    console.log("gi melding om at man kan ta lappen på moped/lett motorsykkel.")
    console.log("gi melding at man begynne å øvelseskjøre")

}else if (age>15) {
    console.log("gi melding at man begynne å øvelseskjøre")
} else if  (age<15) {
    console.log("alderen er for ung.")
}   
console.log(age)