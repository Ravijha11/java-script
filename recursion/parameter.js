function parameter(n,sum){
  if(n<1){
    console.log("Sum is "+sum)
    return
  }
  parameter(n-1,sum+n)
}
parameter(1000,0)