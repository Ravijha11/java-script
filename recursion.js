function raci(number){
  if(number==0 || number == 1) return;
  console.log(number)
  number--
  raci()
    
}
raci(56545)