var  arr1 = [4, 9, 2, 3, 5, 1, 'd', 'a', 'c', 'f'];
function arraySort(anArray) {
   if(Array.isArray(anArray)){
  var  obj = {odds:[],
    evens:[],
    chars:[]
  }
      for (i =0;i<anArray.length;i++) {
        if (anArray[i] %2 == 0) {
          obj.evens.push(anArray[i]); 
     }else if(anArray[i]%2 == 1){
      obj.odds.push(anArray[i]);
    }else{
      obj.chars.push(anArray[i]);
     }
   }

   obj.evens.sort();
   obj.odds.sort();
   obj.chars.sort();



   return obj;

  } else{
    return "invalid input"
  }
}







module.exports = arraySort;