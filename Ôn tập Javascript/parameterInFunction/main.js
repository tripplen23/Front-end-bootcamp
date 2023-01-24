/*
1. Tham số
    - Định nghĩa?
    - Kiểu dữ liệu
    - Tính private
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for
*/

function writeLog(){ // Parameter
    var myString = '';
    for (var param of arguments) {
        myString += `${param}-`
    }
    console.log(myString);
}

writeLog("log1", "log2", "log3") // writeLog(arguments)
