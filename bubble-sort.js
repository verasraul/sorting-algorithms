
// BUBBLE-SORT PSEUDO-CODE:
    // Start looping from with a variable called i the end of the array towards the beginning
    // Start an inner loop with a variable called j from the beginning until i - 1
    // If arrlj] is greater than arr[j+1], swap those two values!
    // Return the sorted array



function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr. length; j++){
            if (arr[j] > arr[j+1]){
                // SWAP!
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37, 45,29,8]))