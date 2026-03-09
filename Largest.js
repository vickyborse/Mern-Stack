let arr = [10, 45, 23, 78, 56, 78];

function secondLargest(arr) {

    let largest = -Infinity;
    let second = -Infinity;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] > largest) {
            second = largest;
            largest = arr[i];
        }
        else if(arr[i] > second && arr[i] != largest) {
            second = arr[i];
        }

    }

    return second;
}

console.log(secondLargest(arr));
