let arr = [1,2,3,2,4,1,2,3];

let freq = {};

for(let i = 0; i < arr.length; i++){

    let el = arr[i];

    if(freq[el]){
        freq[el] = freq[el] + 1;
    }
    else{
        freq[el] = 1;
    }

}

console.log(freq);
