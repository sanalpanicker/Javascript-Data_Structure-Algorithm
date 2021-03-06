//https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
// https://medium.com/@marcellamaki/finding-the-maximum-contiguous-sum-in-an-array-and-kadanes-algorithm-e303cd4eb98c


let maxSubArray = (arr) =>{

let globalMax = 0,
    currentMax = 0;

    //o(N) - kadence algo
    //Addition
    for(let i=0; i< arr.length ; i++){
        currentMax = Math.max(currentMax+arr[i], arr[i]);
        globalMax =  Math.max(globalMax, currentMax);
    }

    return globalMax;

    //Product

    //let globalMax = 1,
    //currentMax = 1;

    // for(let i=0; i< arr.length ; i++){
    //     currentMax = Math.max(currentMax*arr[i], arr[i]);
    //     globalMax =  Math.max(globalMax, currentMax);
    // }

    // return globalMax;
}

//console.log(maxSubArray([-1,-2,2,3,4]));

console.log(maxSubArray([2,3,-2,4,5,-9]));