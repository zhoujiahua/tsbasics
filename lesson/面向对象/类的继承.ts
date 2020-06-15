/**
 * 类的继承
 * */

//  父类
class Persson {
    public name: string;
    protected gender: string = 'Hello';
    private age: number = 18;
    constructor(name: string, public sex: string = 'male') {
        this.name = name;
        this.sex = sex;
    }

    printAge() {
        console.log(this.age);
    }

    setGender(gender: string) {
        this.gender = gender
    }

    setSex(sex: string) {
        this.sex = sex;
    }
}

// 子类 继承 父类方法
class Student extends Person {
    studentid: number;
    constructor(name: string, sex: string, studentid: number) {
        super(name, sex)
        this.studentid = studentid
    }

    // 重写父类方法
    setSex(sex: string): string {
        this.sex = sex;
        return this.sex + this.gender;
    }
}

let s = new Student('jerry', 'man', 9527);
s.printAge();
s.setGender('mini');
s.setSex('come on....');