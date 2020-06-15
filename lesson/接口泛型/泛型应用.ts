/**
 * 泛型应用 class
*/

class CountNumber<T> {
    num1: T;
    num2: T;

    constructor(num1: T, num2: T) {
        this.num1 = num1;
        this.num2 = num2;
    }

    calcalate(): number {
        return +this.num1 * +this.num2;
    }
}

const countNum = new CountNumber(90, 99);
console.log(countNum.calcalate());

const countNum1 = new CountNumber<string>('10', 'hi...');
console.log(countNum1.calcalate());

const countNum2 = new CountNumber<number>(10, 20);
console.log(countNum2.calcalate());