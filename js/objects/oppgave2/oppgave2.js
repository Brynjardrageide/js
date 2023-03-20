const activities = [
    {activity: "Lage middag",
    points: 30 },
    {activity: "rydde middag", 
    points: 15 }, 
    {activity: "Støvsuge stue", 
    points: 15 }, 
    {activity: "Vaske badet", 
    points: 40} 
]; 

for (let i = 0; i < activities.length; i++){
    console.log(activities[i].activity);
    console.log(activities[i].points);
}
//Skriv en løkke som skriver ut alle aktivitetene (både navn og poeng) til console.log