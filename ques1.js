//option a,b
class movie{
    constructor(title,studio,rating){
this.title=title;
this.studio = studio;
this.rating = "PG";
}
//option c
getPG(){
    return "the rating is " + this.rating;
}
}


class movie1{
    constructor(title,studio,rating){
        this.title = title;
this.studio = studio;
this.rating = "PG";
}
getPG(){
    return "the rating is " + this.rating;
}
    
}
var movie2 = new movie1("Casino Royale","Eon productions","PG13");
console.log(movie2.getPG());