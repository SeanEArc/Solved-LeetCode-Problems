/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let output = [];
    
    for (let i = 0; i < nums.length; i++ ){

        for (let j = i + 1; j < nums.length; j++ ){

            let total = nums[i] + nums[j]

            if (total == target ){
                output.push(i)
                output.push(j)
                return output;            
            }
        }
    }
};