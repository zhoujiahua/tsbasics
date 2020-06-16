
let a: string = "string";
let b: string = "string";
let c: string = "string";
let d: string = "string";
console.log(a);
// debugger

// 泛型
let arr: Array<number> = [123, 412, 34, 12];

arr.forEach(item => {
    console.log(item);
})

// 枚举类型
enum Flag {
    success = 1,
    error = -1
}
console.log(Flag.error);

function sum(a: string) {
    return 'ok' + a
}
console.log(sum('.........'));