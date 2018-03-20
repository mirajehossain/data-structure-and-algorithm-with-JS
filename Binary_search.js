let array = [1,2,3,4,5,6,7,8,9,55],
    key = 9;

 binarySearch = (arr,k) =>{
  
  let mid,
      low = 0,
      high = arr.length-1;
    
  while(low <= high){
     mid = Math.floor((low + high) / 2);
      
        if(k === arr[mid]) 
            return mid;
         else if(arr[mid] < k)
            low = mid + 1;
         else 
            high = mid - 1;
     
      if (low > high) {
        return -1;
      }
    }
}
console.log(binarySearch(array,key));
