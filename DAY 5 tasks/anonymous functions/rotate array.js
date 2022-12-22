var nums = [1, 2, 3, 4, 5];
var k = 3;

var rotatearray = function(arr,n){
        for (let i = 0; i < k; i++) 
        nums.unshift(nums.pop());
    return nums;
    }
console.log(rotatearray(nums,k));