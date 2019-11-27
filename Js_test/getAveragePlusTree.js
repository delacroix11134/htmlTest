/*press ctrl + B to open console */

/*兩數平均後加三*/
const getAverage = (numberOne, numberTwo) => {
  return (numberOne + numberTwo) / 2;
}

console.log(getAverage(365, 27));

const averagePlusThree = (numberOne , numberTwo) => {
  return getAverage(numberOne , numberTwo) + 3;
}  

console.log(averagePlusThree(365 , 27));