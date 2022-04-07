/* Function tipCalculator(), two parameters quality and total cost+tip
Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%
*/



const tipCalculator = (quality, tiptotal)=>{
    switch (quality){
        case 'bad':
            return tiptotal*.05;
        case 'ok':
            return tiptotal*.15;
        case 'good':
            return tiptotal*.20;
        case 'excellent':
            return tiptotal*.30
        default:
            return tiptotal*.18;
    }
}
    





console.log(tipCalculator('good', 100)) //should return 20