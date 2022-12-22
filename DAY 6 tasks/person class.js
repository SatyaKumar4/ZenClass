class person {
    constructor(name, place, age) {  
        this.name = name;
        this.place = place;
        this.age = age;
    }
    display(arr) {
        console.log(arr);
    }
}
var p1 = new person("Satya Kumar", "Vallioor", 23);
var p2 = new person("Ganesan", "Chennai", 22);

let arr = [p1, p2];
p2.display(arr); 
