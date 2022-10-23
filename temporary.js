
function temporary(nums, target) {
    let hash = new Map();
    let array = [];
    if (target < 0) {
        nums = [];
    }
    for (let i = 0; i < nums.length; i++) {
        if(hash.has(target-nums[i])){
            return [hash.get(target -nums[i]),i];
        }else{
            hash.set(nums[i],i)
            console.log(hash)
        }
    }
}
    /* for(let i=0;i<nums.length;i++){
         tempNum=target-nums[i];
         if(nums.indexOf(tempNum)!==0){
         array.push(i);
         array.push(nums.indexOf(tempNum));
         break;
         }
     }
     return array;
 }
 
 console.log(temporary([2,7,11,15],9))
 */

   
console.log(temporary([2, 7, 11, 15], 9))
module.exports = temporary;

