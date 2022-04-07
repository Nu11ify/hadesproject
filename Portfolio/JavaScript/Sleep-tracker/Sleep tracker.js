let getSleepHours=day=> {
    switch(day) {
        case 'monday':
            return 8
            break;
        case 'tuesday':
            return 7
            break;
        case 'wednesday':
            return 6
            break;
        case 'thursday':
            return 5
            break;
        case 'friday':
            return 4
            break;
        case 'saturday':
            return 3
            break;
        case 'sunday':
            return 2
        default:
            return 'error'
    }
};


let getActualSleepHours = () => {
    return getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
};

let getIdealSleepHours=()=>{
    let idealHours=8
    return idealHours*7;
};

let calculateSleepDebt=()=>{
    let actualSleepHours=getActualSleepHours();
    let idealSleepHours=getIdealSleepHours();

    if (actualSleepHours===idealSleepHours){
        console.log('Ideal amount of sleep')
    } else if(actualSleepHours>idealSleepHours){
        console.log(idealSleepHours - actualSleepHours + ' hours of sleep than needed');
    } else if (actualSleepHours<idealSleepHours) {
        console.log('You should get ' + (idealSleepHours-actualSleepHours) + ' hours more sleep')
    } else {
        console.log('error')
    }
    
};