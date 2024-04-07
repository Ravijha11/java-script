let  ravi = [1,2,,3,4,5,6,7,8,9,10];
// let nakul = ravi.filter((num) => num>6);
// console.log(nakul)
const matru = ravi.reduce((acc, curr) => {
  console.log(`curr vvalue is  ${curr} and acc value is  ${acc}`);
  return curr + acc


})
console.log(matru)