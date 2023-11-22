class person{
    constructor(firstName,LastName,Age){
        this.firstName = firstName;
        this.LastName = LastName;
        this.Age = Age;
    }
        getFullName(){
            return this.firstName+" "+ this.LastName;
        
        }
    }
    let person1 = new person("raji","ravi",21);
    console.log(person1.Age);
    console.log(person1.getFullName());
    