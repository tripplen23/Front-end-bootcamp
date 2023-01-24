//VD1:
const logger = (log) => {
    console.log(log);
}

logger ("Hellooooooooooooooooooooooooooo");

//VD2:
const sum1 = (a, b) => {
    console.log(a+b);
}

sum1 (12323,123123);

//VD3: Rút ngắn code từ VD2
const sum2 = (a, b) => a + b;
console.log(sum2(8, 9));

//VD4: Object 

const obj = (a, b) => {
    return {
        a: a,
        b: b
    };
};

console.log(obj(2, 2));

//VD5: Rut ngan VD4

const obj1 = (a, b) => ({a: a, b: b});

console.log(obj1(3, 5));

//VD6: Rut gon VD1

const logger1 = log1 => console.log(log1);
logger1 ("Hello again");

//VD7: Sử dụng arrow function để tạo hàm triple nhận vào 1 tham số x và trả về giá trị x * 3.

const triple = (x) => x*3;
// Expected results:
console.log(triple(2)) // Output: 6
console.log(triple(3)) // Output: 9
console.log(triple(5)) // Output: 15










