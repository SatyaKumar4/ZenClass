let returnPrime = (a)=>{
    let arr = [];
    for(i=0; i<a.length; i++){
        for(j=2;j<a[i];j++){
        if(a % j !== 0){
            arr.push(a[i]);
        }
        }                
    }
    console.log(arr);
}
returnPrime([1,2,3,4,5]);
    