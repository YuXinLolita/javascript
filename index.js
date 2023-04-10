

// /**
//  * @author YUXIN
//  * @description 面试相关
//  */

// let a = 100 
// let b = a 
//  a = 200
//  console.log(b)

// let a = {age:200} 
// let b = a 
// b.age = 21
// console.log( a.age)

/**
 * @param {Object} obj 要复制的对象
 */
// typeof console.log
// typeof function () {}
// typeof null
// console.log('*** 123')

/**
 * 深复制
 */
const obj = {
    age: 20,
    name:'雨馨',
    address: {
        city:'Tokyo'
    },
    arr:['a','b','c']
}

const obj2 = obj 
obj2.address.city = 'Paris'
console.log(obj.address.city)