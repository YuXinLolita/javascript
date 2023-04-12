

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
// let result = {
//     age:23,
//     name:'雨馨'
// }
function deepClone (obj = {}) {
    if(typeof  obj !== 'object' || obj == null) {   //'object' 要加引号
        return obj
    }
    let result ;
    if(obj instanceof Array) {
        result = []
    }else {
        result = {}
    }

    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            //保证 key 不是原型的属性
            result[key] = deepClone(obj[key])
        }
    }
    return result 
}
console.log('*** 123')
const obj3 = {
    age: 20,
    name:'雨馨',
    address: {
        city:'Tokyo'
    },
    arr:['a','b','c']
}

const obj2 = deepClone(obj3)
obj2.address.city = 'Paris'
console.log(obj3)
console.log(obj2)

/**
 * @deprecated 变量类型 && 值类型 和 引用类型
 */
// + 可以是加号也可以是连接字符春的方法
const a = 100 + 10   //110
const b = 100 + '10'  //'10010
const c = true + '10' //'true10'

//除了 == null 之外，其他一律用 === ， 例如 
const obj = { x:100}
 if( obj.x == null ) {}
 //上面一句相当于下面这句
 if(obj.a === null || obj.x === undefined) {}

 //truly变量： !!a === true
 //falsely变量 !!a === false 
 //当然通常来说没这么复杂

//逻辑判断
console.log(10 && 0) //返回 0   短运算
console.log('' || 'abc') // 'abc'

const obj4 = {x: 100, y:200}
const obj5 = obj4
let x1 = obj4.x
obj5.x = 101
x1 = 102
 console.log(obj4) // {x: 101} 
 console.log(x1)

