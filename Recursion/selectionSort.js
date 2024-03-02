

function selectionSort(arr, row,col,max){
    if(row===0)return;

    if(col<row){
        if(arr[col] > arr[max]){
            selectionSort(arr,row,col+1,col)
        }
        else{
            selectionSort(arr,row,col+1,max)
        }
        
    }
    else{
        let temp = arr[max]
        arr[max] =arr[row-1]
        arr[row-1]=temp
        selectionSort(arr,row-1,0,0)
    }
    return arr;
}


console.log(selectionSort([2,3,4,1],4,0,0))