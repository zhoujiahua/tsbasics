/**
 * 命名空间 namespace
 * */

//  基本使用
namespace MyMath {
    export const PI: number = 3.14;

    export function sumValue(num1: number, num2: number): number {
        return num1 + num2;
    }

    export function calcCircle(value: number): number {
        return PI * value;
    }
}

const PI: string = '3.14';
console.log(MyMath.sumValue(10, 11));
console.log(MyMath.calcCircle(10));
console.log(PI);
console.log(MyMath.PI);

// 多文件合并 tsc --outfile app.js sum.ts sur.ts

// 多重命名空间 && 引入其他文件
// tsc app.ts --outFile app.js
/// <reference path= "./sum/cur.ts" />
/// <reference path= "./sum/sum.ts" />
