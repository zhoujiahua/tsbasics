/**
 * class 类（属性，方法）
 * */

class Person {
    public name: string;
    protected gender: string = 'hello';
    private age: number = 18;
    constructor(name: string, public sex: string) {
        this.name = name;
        this.sex = sex;
    }

    printAge() {
        console.log(this.age);
    }

    setGender(gender: string) {
        this.gender = gender;
    }
}

let person = new Person('jerry', 'hi');
console.log(person.name, person.sex);
person.printAge();
person.setGender('Hi');