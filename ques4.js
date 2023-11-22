class uberfare {
    constructor(city,fare,customerName){
        this.city = city;
        this.fare = fare;
        this.customerName = customerName;

    }
    getFareCity(){
        return "fare for the city is" +this.fare;

    }
}
    var cityA = new uberfare("cityA",500,"customer1");
    var cityB = new uberfare("cityB",300,"customer2");
    console.log(cityA.getFareCity());
    console.log(cityB.getFareCity());
