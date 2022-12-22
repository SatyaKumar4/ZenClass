var convertCap = ((a)=>{
    var arr =[];
    for(i=0;i<a.length;i++){
        arr.push(a[i].toUpperCase());
    }
    return(arr);
})
console.log(convertCap(['s','a','t','y','a']));
console.log(convertCap(['k','u','m','a','r']));
console.log(convertCap(['satya','kumar']));