/// Linear Search----
let arrayItem = [5,8,5,6,9,8,7,11,2,0,56,5656,565,99,66];
let findItem = 5656; 

function linearSearch  (arrayItem,findItem){
	for(let i=0;i<arrayItem.length;i++){
		if(arrayItem[i] === findItem){
        	console.log(`Found -  ${findItem} in the index of - ${i+1}\n`);
		} else {
			console.log(`Not Found -  ${findItem} in the Array\n`);
		}		
	}	
}
linearSearch(arrayItem,findItem);
