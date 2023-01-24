//Spread con duoc goi la toan tu giai (...)

//vd1
var array1 = ["JS", "Ruby", "PHP"];

var array2 = ["ReactJS","Dart"];

var array3 = [...array2, ...array1];

console.log(array3);

//vd2

var object1 = {
    name: 'JS'
};

var object2 = {
    price: 2000
};

var object3 = {
    ...object1, ...object2
};

console.log(object3);

//vd3

var defaultConfig = {
    api: "https://mahalo",
    apiVersion: "v1",
    other: "other"
};

var exerciseConfig = {
    ...defaultConfig, //Cac thuoc tinh can lay khac deu giong nhau
    api: "https://synchronize" //Khac moi thang nay
};

console.log(exerciseConfig);

//vd4

var array = ["js", "php", "ruby", "ReactJS", "Python"];

function logger(...rest){
    for(var i=0; i<rest.length; i++){
        console.log(rest[i]);
    }
}

logger(...array);

//Rest: Kết hợp với destructuring dùng để định nghĩa ra tham số
//Spred: Truyền đối sô, giải nó trong 1 array hoặc 1 object khác.

//Bạn hãy sử dụng spread để sao chép tất cả các key và value từ object person1 sang person2

const person1 = {
    name: 'Son',
    age: 21
}

const person2 = {
    ...person1
}

// Expected results
console.log(person2.name) // Output: 'Son'
console.log(person2.age) // Output: 21
console.log(person1 === person2) // Output: false