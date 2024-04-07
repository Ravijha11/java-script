function abc(n, arr){
  let count =0;

  for (let i =0;i<arr.length;i++){
    if(arr[i]==n){
      count = count+1;
    }
    

  }
  return (count);



}
console.log(abc(9,[78,9855,9554,545,9655,655,9,9,9,9,9]))