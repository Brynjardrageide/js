const  activitiesDone = []
 
const family = ["Hilde", "Finn", "Markus", "Martinus"]
const famalyy = [hilde, finn, markus, martinus]
const hilde = [
    {arbeidgjort: 0,
    points: 0}
];
const finn = [
    {arbeidgjort: 0,
    points: 0}
];
const markus = [
    {arbeidgjort: 0,
    points: 0}
];
const martinus = [
    {arbeidgjort: 0,
    points: 0}
];
const activities = [
    {activity: "Lage middag",
    points: 30 },
    {activity: "rydde middag", 
    points: 15 }, 
    {activity: "Støvsuge stue", 
    points: 15 }, 
    {activity: "Vaske badet", 
    points: 40},
    {activity: "støvsuge stue", 
    points: 12},
    {activity: "vaske trapen", 
    points: 10}

]; 

 
function Activity(name, activity, points) {
  this.name = name;
  this.activity = activity;
  this.date = new Date();;
  this.points = points;
}
 
// Lag et activity objekt
let done = new Activity(family[0], "Lage middag",  30);
activitiesDone.push(done)
let done2 = new Activity(family[1], "Oppvask middag",  15);
activitiesDone.push(done2)
 
//Lag en løkke som genererer 20 random elementer i activitiesDone (Hent ut tilfeldige elementer fra activties og family) og skriv listen til console.log

for (let i = 0; i < 20; i++) {
    let aindex = Math.floor(Math.random() * activities.length)
    let findex = Math.floor(Math.random() * family.length)
    activitiesDone.push(new Activity(family[findex], 
    activities[aindex].activity, activities[aindex].points))
    if (findex === "hilde") {
        hilde[points] += activities[aindex].points
    }  else if (findex === "finn") {
        finn[points] += activities[aindex].points
    } else if (findex === "markus") {
        markus[points] += activities[aindex].points
    } else if (findex === "martinus"){
        martinus[points] += activities[aindex].points
    }

}
console.log(activitiesDone);
for (let i = 0; i < family.length; i++){
    console.log(familyy[i].points)
}