class Movie {
    constructor(title,studio,rating) {
        this.title = title;
        this.studio = studio;
        if(rating == null) 
            this.rating = "PG";
        else    
            this.rating = rating;
    }
    getPG(arr){
        let result=[];
        for(var i in arr){
            if(arr[i].rating === "PG")
            result.push(arr[i].title)}  // returning an array which contains only the Movie names 
        return result;  
    }
}
var movie1 = new Movie("Final Destination","New Line Cinema","R");
var movie2 = new Movie("Casino Royale","Eon Productions","PG")
var movie3 = new Movie("Harry Potter","Warner Brothers");

let arr = [movie1,movie2,movie3];

console.log(movie3.getPG(arr));   