/**
 * Database
*/

// 泛型接口
interface DBI<T> {
    create(info: T): boolean;
    delete(id: number): boolean;
    update(id: number): boolean;
    retrieve(id: number): any[];
}

// 泛型接口实现
class MysqlDB<T> implements DBI<T>{
    create(info: T) {
        console.log(info);
        return true
    }
    delete(id: number) {
        console.log(id);
        return true;
    }
    update(id: number) {
        console.log(id);
        return true;
    }
    retrieve(id: number) {
        console.log(id);
        return [];
    }
}

// type 类型
type UserData = {
    username: string;
    password: string;
    age: number;
    sex: string;
    desc: string
}

// 用户类
class User {
    username: string;
    password: string;
    age: number;
    sex: string;
    desc: string;
    constructor(data: UserData) {
        this.username = data.username;
        this.password = data.password;
        this.age = data.age;
        this.sex = data.sex;
        this.desc = data.desc;
    }
}

const dataInfo: UserData = {
    username: 'jerry',
    password: '321',
    age: 18,
    sex: 'male',
    desc: 'very good'
}

const m = new MysqlDB<User>();

m.create(dataInfo);