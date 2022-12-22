var printOdd = ((a)=>{
    var arr = [];
    for(i=0;i<a.length;i++){
    if(a[i]%2 !== 0){
        arr.push(a[i]);
    }
}
    return arr;
})
console.log(printOdd([0,1,2,3,4,5]))
console.log(printOdd([6,7,8,9,10,11]))