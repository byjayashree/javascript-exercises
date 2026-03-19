const sumAll = function(a,b) {
    let aaa=Math.min(a,b);
    let bbb=Math.max(a,b);
    if(a<0 || b<0) return "ERROR";
    else if( !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    else{
         let sum=0;
        for(let i=aaa;i<=bbb;i++){
        sum+=i;
          }
        return sum;
      };
    }
  



// Do not edit below this line
module.exports = sumAll;
