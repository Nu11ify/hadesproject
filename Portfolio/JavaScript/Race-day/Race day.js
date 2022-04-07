let raceNumber = Math.floor(Math.random() * 1000);
let RegisteredEarly=true;
let age=18;
if (age>18 && RegisteredEarly){
    raceNumber+=1000;
};

if (age>18 && RegisteredEarly){
    console.log("Race starts 9.30 am. Your number is ${raceNumber}");
}
else if (age>18 && !RegisteredEarly){
    console.log("Race will begin at 11, number is ${raceNumber}.");
}
else if (age<18){
    console.log("Race begins at 12:30, number is ${raceNumber}");
}
else{
    console.log("Approach the registration desk");
};
