// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

//VD1:
var name = "Javascript";
var price = 1000;

var course = {
    name,
    price,
    getPrice() {
        return price;
    }
}
console.log(course)
console.log(course.getPrice());

//VD2:

var fieldName = "name";
var fieldPrice = "price";

var course2 = {
    [fieldName]: "Python",
    [fieldPrice]: 10000
}

console.log(course2);