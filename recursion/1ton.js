function n(i,N){
  if(i>N)return;
  console.log(i);
  n(i+1,N)

}
n(1,50)