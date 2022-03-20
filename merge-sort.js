
// MERGING ARRAYS PSEUDO CODE:
    // Create an empty array, take a look at the smallest values in each input array
    // While there are still values we haven't looked at.
    // If the value in the first array is smaller than the value in the second array, push the value in the first array into our
    // results and move on to the next value in the first array
    // If the value in the first array is larger than the value in the second array, 
    // push the value in the second array into our results and move on to the next value in the second array
    // Once we exhaust one array, push in all remaining values from the other array

    // Create a function that merges 2 already sorted arrays
    function merge(arr1, arr2){
        // Create a variable called 'results' and set it to an emmpty array
        let results = [];
        // FIRST; we're going to make our pointers
        // We're going to start with a variable at zero and another one at zero, one for each array,
        // and then they'll move through individually
        let i = 0;
        let j = 0;
        // We need to have a while loop that that runs while I is less than the length of the array and J is less than the length
        // Basically meaning while there's still data for us to look at in both, if we hit the end of one of them, we are going to do something else
        // This first loop only applies when we're looping through both at the same time
        // While I is less than array one length and J is less than array to that length
        while(i < arr1.length && j < arr2.length){
            // Now we just do a simple comparison of array2 of j and array1 of i
            // We're checking if the value of array2 of j is GREATER than array1 of i
            if (arr2[j] > arr1[i]) {
                // If it is LESSER than, then we take the smaller value and we put it in array 1 in our 'results' variable
                results.push(arr1[i]);
                // If we need to push i into array, i will no longer be zero 
                // We need to move i up by 1
                i++;
                // ELSE; Instead of doing an 'else if' array2 is less than array1, we're going to have an else which will which
                // will catch the case when they're equal and when array one is greater
                // Because if we just did greater than and less than, we'd be missing the case of equality
            } else {
                // Otherwise we push the value to array 2 in our 'results' variable
                results.push(arr2[j]);
                // Then increment j by 1 because we are moving up
                j++;
            }
        }
        // What needs to happen afterwards once we exhaust one of them?
        // Remember our condition, while i is less than array1.length and j is less than array2.length
        // We're going to do 2 while loops basically with the same logic as a our first while loop atop but without the conditional 'if' check
        while(i < arr1.length) {
            results.push(arr1[i])
            i++;
        }
        while(j < arr2.length) {
            results.push(arr2[j])
            j++;
        }
        // Whatever happens at the end, we merge them as far as we can until we hit the end of one of the arrays.
        // Let's say we hit the end of array1 but array2 still has stuff in it, meaning j´ hasn't hit the end.
        // So J will be less than array2.length
        // In our case, when i ends, index of j will be at 2 which will '6', so j we'll have to finish adding '6 & 8' to the array
        // Then j will have hit the end making the index of j equal to array2.length
        // And we return 'resutls'
        return results;
    }
    // console.log(merge([5,2,9],[20,10,6,8]))
    console.log(merge([2,5,9],[6,8,10,20]))



// MERGE-SORT PSEUDO CODE:
    // Break up the array into halves until you have arrays that are empty or have one element
        // Use array.slice()
        // Go from 0 til the middle of the array and from the middle of the array til 0 
        // This create to halves of an array
        // Use merger(arr1, arr2)
        // Call merge sort again to break each half into its own halve and continue recursively
        // 
    // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full
    // length of the array
    // Once the array has been merged back together, return the merged (and sorted!) array
    // Recrusive Merge Sort
    function mergeSort(arr){
        if(arr.length <= 1) return arr;
        let mid = Math.floor(arr.length/2);
        let left = mergeSort(arr.slice(0,mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, sright);
    }

mergeSort([10,24,76,73])