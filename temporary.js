function temporary(nums,target){
    let array=[];
    let tempNum;
    if(target<0){
        nums=[];
    }
    
    for(let i=0;i<nums.length;i++){
        tempNum=target-nums[i];
        if( nums.indexOf(tempNum)!==0){
        array.push(i);
        array.push(nums.indexOf(tempNum));
        break;
        }
    }
    return array;
}

console.log(temporary([2,7,11,15],9))


module.exports = temporary;

