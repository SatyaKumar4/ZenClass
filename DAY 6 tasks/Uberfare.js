class fare{
    constructor(start,end){
            this.start = start;
            this.end = end; 
            this.distance = Math.abs(start-end);
            this.fare = this.distance*25;  
    }
    TotalFare(arr){

        console.log(`the start point is ${this.start} and the end point is ${this.end}`);
        console.log(`Your Trip Distance is ${this.distance} kms`);
        console.log(`Gross fare for the trips is: ₹ ${this.fare}/-`);

        let Discount = 15;
        let afterDisc = this.fare*(1-(Discount/100));
        console.log(`Your final Uber fare for the trip after ${Discount}% discount is : ₹ ${afterDisc}/-`);
    }
}
var uber1 = new fare(0,10);
var uber2 = new fare(25,65);
let arr = [uber1,uber2];
uber2.TotalFare(arr);  