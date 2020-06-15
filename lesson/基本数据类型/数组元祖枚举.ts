/**
 * 数组 元祖 枚举
*/

// 数组
let arr1: Array<string> = ['jerry', 'tom'];
let arr2: Array<number> = [1, 2];
let arr3: number[] = [3, 4];
let arr4: any[] = ['jerry', 1, false];

// 元祖
let colors: [string, number] = ['jerry', 886];

// 枚举 enum
enum Color {
    Black,
    Yellow,
    Red
}

let myColor: Color = Color.Black;
console.log(myColor);


