/**
 * 函数类型
 * */

function returnValue1(): string {
    return 'string';
}

function returnValue2(): number {
    return 886;
}

function returnValue3(): void {
    console.log('没有任何返回值....');
}

// 参数返回值
function sumValue1(value1: any, value2: any): any {
    return value1 + value2;
}

function sumValue2(value1: number, value2: number): number {
    return value1 + value2;
}

function sumValue3(value1: string, value2: string): string {
    return value1 + value2;
}

// 函数类型
let myFunc1: (a: number, b: number) => number;
myFunc1 = sumValue2;
console.log(myFunc1(5, 5));

let myFunc2: (a: string, b: string) => string;
myFunc2 = sumValue3;
console.log(myFunc2('jerry', 'tom'));