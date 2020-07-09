
function calculateRetirement(deposit, targetBalance) {
   var result = {};
   for (var i= 1; i<7; i++) {
      var year=1,
       value = deposit*(1+i/100);
      while (value < targetBalance) {
         value += deposit;
         value *=(1+i/100);
         year ++;
      }
      result[i] = year;
    }
   return result;
  }
  function calculateRetirement(deposit,targetBalance){
     var result= {};
     let year;
     let i;
     let value
     if (i=1) {
      year= 1;
      value = deposit*(1 + i/100);
      result[i]=value+year;
        
     } else if (value < targetBalance); {
      value += deposit;
      value *=(1+i/100);
      year ++;
      result[i] = year;
        
       }  
        return result;
     }
  

 
  calculateRetirement(100, 700);

  calculateRetirement(100, 1000); 
  calculateRetirement(100, 10000); 



