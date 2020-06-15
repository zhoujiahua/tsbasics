/**
 * 1.class set get 修饰词 用于隔离私有属性 和 可公开属性
 * 2.class 静态属性方法
 * */

class Persons {
    private _name: string = 'jerry';  //私有属性
    static PI: number = 3.14; // 静态属性

    // 私有属性赋值
    set setName(name: string) {
        this._name = name;
    }

    // 私有属性取值
    get getName(): string {
        return this._name;
    }

    // 静态方法
    static calCircle(value: number): number {
        return this.PI * value;
    }
}

let p = new Persons();
p.setName = 'jiahua'; // 赋值
console.log(p.getName);  // 取值

// 静态属性 静态方法调用
console.log(Persons.PI);
console.log(Persons.calCircle(50));