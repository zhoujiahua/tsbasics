/**
 * 对象类型
 * */

// any type
let dataObj1 = {
    name: "jerry",
    age: 18
}


let dataObj2: { name: string, age: number } = {
    name: "jerry",
    age: 18
}

// 复杂对象类型
let complex1: {
    data: number[],
    myfunc: (item: number) => number[]
} = {
    data: [1, 2, 3, 4],
    myfunc: function (item: number): number[] {
        return this.data;
    }
}

// type 生成类型
type myType = {
    data: number[],
    myfunc: (item: number) => number[]
}

let complex2: myType = {
    data: [1, 2, 3, 4],
    myfunc: function (item: number): number[] {
        this.data.push(item);
        return this.data;
    }
}

