function back(i,n) {
  if(i<1) return;
  console.log(i)
  back(i-1,n);
  
}
back(100,100)