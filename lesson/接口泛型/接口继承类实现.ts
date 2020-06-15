/**
 * 接口继承 类实现
*/

interface Work {
    name: string;
    age: number;
}

interface Room {
    id: string;
    great(): void
}

class Job implements Work, Room {
    name: string = 'jerry';
    age: number = 18;
    id: string = 'abc';
    great(): void {
        console.log('hi');
    }
}


// interface 继承
interface Employee extends Work {
    sex: string
}

const employee: Employee = {
    name: 'jiahua',
    age: 18,
    sex: 'male'
}