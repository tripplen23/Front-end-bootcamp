var array = ["JS", "PHP", "Ruby"];

var a = array[0];
var b = array[1];
var c = array[2];

console.log (a, b, c);

// use destructuring

var array1 = ["JS", "PHP", "Ruby"];

var[d, , f] = array1;

console.log (d, f);

// use rest: Lay nhung thang con lai 

var array2 = ["JS", "PHP", "Ruby"];

var[g, ...rest] = array2;

console.log (g);
console.log(rest);

// Use with objects 

var course = {
    name: "JS",
    price: 1000,
    image: "img-address"
};

var {name, ...rest} = course;

console.log(name);
console.log(rest);

// newObject 

var course = {
    name: "JS",
    price: 1000,
    image: "img-address",
    children:{
        name: "ReactJS"
    }
};


var {name: parentName, description = "default description", ...newObject} = course;


console.log(newObject); // xoa name 
console.log(description); // description

// more examples of rest

function logger (...params){
    console.log(params);
}

console.log(logger(1,2,3,4,5,6,7,8));

//bo sung REST
function logger(a,  b, ...params){
    console.log(params);
}

logger(1,2,3,4)

// more examples

function logger2({name, price, ...rest}) {
    console.log(name);
    console.log(price);
    console.log(rest);
}

logger2({
    name: "Javascript",
    price: 1000,
    description: "content description"
})

// more examples

function logger3([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest);
}

logger3([3,6,9,12,15])

