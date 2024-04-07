function raci(n){
  if (n==0) return 1;
  return n * raci(n-1)
}
 console.log(raci(100))