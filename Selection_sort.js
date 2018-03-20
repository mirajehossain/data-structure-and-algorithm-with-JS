let arr = [1,5,11,56,9,11,3,98,6];

selectionSort = (arr)=>{
	let temp;
	for(let i= 0; i<arr.length;i++){
		for(let j=i;j<arr.length;j++){
			if(arr[i]<arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;				
			}
		}
	}
	return arr;
}

selectionSort(arr);
