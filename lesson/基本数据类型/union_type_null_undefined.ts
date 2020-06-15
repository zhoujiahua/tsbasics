/**
 * union type 检查类型 undefined never
 * */

// union type
let unionType: number | string | boolean = 12;
unionType = '12';
unionType = true;

// 检查类型
let checkType = 10;
if (typeof checkType == 'number') {
    console.log('number');
}

// null & undefined

// 关闭严格模式
// let myNull1 = 12;
// myNull1 = undefined;

let myNull2 = null;
myNull2 = undefined;

/**
 * never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never类型或可以赋值给never类型（除never本身之外）。即使any也不可以赋值给never
 * 通常表现为抛出异常或者无法执行到终止点（例如无线循环）。
 * */
let x: never;
// 不能把其他类型转成never类型
// x = 123;

// never 的使用场景
// 抛出异常
function error(message: string): never {
    throw new Error(message);
}

// 死循环
function loop(): never {
    while (true) { }
}

let y: number;
y = (() => {
    throw new Error('message')
})()






