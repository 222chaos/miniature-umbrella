function difference(array,example){
let hash=new Map;
let result=[];
    for (let i=0;i<array.length;i++){
        hash.set(array[i]);
    }
        for(let j = 0 ;j<array.length;j++){
            if(!hash.has(example[j])){
            result.push(array[j]);
        }
     }
return result;
}
console.log(difference([3,2,1],[4,2]))
console.log(difference([3,2,1],[4,2,1]))
console.log(difference([3,2,1],[2,3]))


