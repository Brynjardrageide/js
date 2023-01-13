let enTekst = "JavaScript er gøyt!"; 
let teller = 0 

//Tell hvor mange t’er det er i teksten 
for (let i=0;i < enTekst.length; i++) {
    if (enTekst[i] === 't') 
        { teller++ }
}

console.log(teller)