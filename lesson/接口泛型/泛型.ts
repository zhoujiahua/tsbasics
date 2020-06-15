/**
 * 泛型 Generic
*/

// 不良写法 any
function identfiy1(arg: any) {
    return arg;
}

// 在函数中使用泛型
function identfiy2<T>(arg: T): T {
    return arg;
}

// 接口中使用泛型
interface GenericIdentify {
    <T>(arg: T): T;
}

// 可以明确指定类型
console.log(identfiy2<string>('string'));

// 交给ts推断类型
console.log(identfiy2(25));

let myIdentify: GenericIdentify = identfiy2;
console.log(myIdentify);


// 接口中提升泛型使用泛型
interface GenericParent<T> {
    (arg: T): T;
}

let parentIdentify: GenericParent<string | number> = identfiy2;
console.log(parentIdentify);

// 泛型添加约束
function getLength<T extends { length: any }>(obj: T): any {
    return obj;
    // return obj.length;
}

const obj: { name: string, age: number, length: number } = {
    name: 'jerry',
    age: 18,
    length: 18
}

getLength(obj);