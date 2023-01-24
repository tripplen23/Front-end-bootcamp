//Cach giai thong thuong (Ta tự code và khá cồng kềnh)
// Ta thêm .? dể check xem các object có tồn tại hay không


const obj = {
    name: 'Emilia',
    cat: {
        name: "Dinah",
        cat2: {
            name: "Dinahh",
            cat3: {
                name: "Dinahh"
            }
        }
    }
};
 if (
//    obj.cat &&
//    obj.cat.cat2 &&
//    obj.cat.cat2.cat3
    obj?.cat2?.cat3

) {
console.log(obj.cat.cat2.cat3.name);
}

// Ta sử dụng Option Chaining khi ta KHÔNG thực sự 
// chắc chắn nếu key đó có tồn tại hay không.

// Syntax: 
// obj.val?.prop
// obj.val?.[expr]
// obj.arr?.[index]
// obj.func?.(args)


//vd2:

const obj2 = {
    getName() {
        console.log(value);
    }
}

obj2.getName?.(123)