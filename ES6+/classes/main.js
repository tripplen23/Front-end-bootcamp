function Course(name, price) {
    this.name = name;
    this.price = price;

    this.getName = function() {
        return this.name;
    }
}

//Class va phuong thuc constucture
class Course{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getName(){
        return this.name;
    }
}

//rut gon no lai 


const phpCourse = new Course("PHP", 1000);
const jsCourse = new Course("Javascript", 2000);