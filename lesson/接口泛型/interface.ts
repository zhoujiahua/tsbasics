/**
 * interface 接口
*/

interface Perc {
    name: string; // : 必传参数
    age: number;
    sex?: string; // ?:可选参数
    readonly salary: number; // 只读参数
    [propName: string]: any; // 自定义
    great(): void; // 方法
}

// interface 可以继承 type 不能继承
type TPerc = { name: string, age: number };

let per: Perc = {
    name: 'jerry',
    age: 18,
    // sex: 'male',
    salary: 9000,
    ids: [23, 413, 24],
    great(): void {
        console.log('kill....');
    }
}

function printPerc(perc: Perc) {
    console.log(perc.name, perc.age);
}

printPerc(per);