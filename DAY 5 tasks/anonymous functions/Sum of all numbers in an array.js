var addNum = function(a){
    result = 0;
    for(i=0;i<a.length;i++){
        result+=a[i];
    }
    return result;
}
console.log(addNum([1,2,3,4,5]));