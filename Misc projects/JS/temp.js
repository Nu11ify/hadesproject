let finalGrade=(mid, fin, hw)=>{
  if ((mid < 0 || mid > 100) || (fin <0 || fin > 100) || (hw < 0 || hw > 100)){
    return 'You have entered an invalid grade.'
  }
  let avg=(mid+fin+hw)/3
  if (avg<60){
    return 'F'
  } else if (avg<70){
    return 'D'
  } else if (avg<80){
    return 'C'
  } else if (avg<90){
    return 'B'
  } else {
    return 'A'
  }
};