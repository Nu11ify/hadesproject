const howOld=(age, year)=>{
    let dateToday=new Date();
    let thisYear=dateToday.getFullYear();
    let yearDifference=year-thisYear;
    let newAge=age+yearDifference;
    if (newAge>age){
        return `You will be ${newAge} in the year ${year}`
    } else if (newAge<0){
        return `The year ${year} was ${-newAge} years before you were born`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}