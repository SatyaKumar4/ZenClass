var duplicates =((arr) => {
            return arr.filter((item, index) => arr.indexOf(item) === index);
        })
console.log(duplicates([1,1,2,3,4,5,5,6,7,8,9,9,10]));