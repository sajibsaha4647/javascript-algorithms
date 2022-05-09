GetduplicatedArray = (nums)=>{
    
    return [...new Set(nums)].length < nums.length

}


let duplicate = [2,2,4,5]

console.log(GetduplicatedArray(duplicate))