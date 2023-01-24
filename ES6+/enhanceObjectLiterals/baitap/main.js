function arrToObj(arr) {
    return arr.reduce((innit, value) => {
       innit[value[0]] = value[1]
       return innit
    }, {})
 }
 
 // Expected results:
 /**
 const obj1 = arrToObj([
    ['name', 'Son Dang'], 
    ['age', 21], 
    ['address', 'Ha Noi']
 ])
 console.log(obj1)
 Output: { name: 'Son Dang', age: 21, address: 'Ha Noi' }
 
 const obj2 = arrToObj([
    ['name', 'Duc Long'], 
    ['age', 18], 
    ['address', 'Ha Noi']
 ])
 console.log(obj2)
 Output: { name: 'Duc Long', age: 18, address: 'Ha Noi' }
 */
 