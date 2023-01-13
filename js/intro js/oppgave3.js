let cityName1 = "Llanfairpwllgwyngyllgogerychwyrndrobwyllllantysiliogogogoch"
let cityName2 = "Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu"
let cityName1count = cityName1.length
let cityName2count = cityName2.length

if (cityName1count < cityName2count){
    console.log(cityName2, "is longer")
} else if (cityName1count > cityName2count){
    console.log(cityName1, "is longer")
}