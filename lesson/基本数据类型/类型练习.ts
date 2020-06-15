/**
 * 类型练习
 * */

type sumType = { money: number, count: (item: number) => void };

let sumValue: sumType = {
    money: 200,
    count(value: number): void {
        this.money += value
    }
};

let handleCount: {
    name: string,
    sumValue: sumType,
    friends: Array<string>
} = {
    name: "Henry",
    sumValue: sumValue,
    friends: ['bucky', 'elyse']
};

handleCount.sumValue.count(500);
console.log(handleCount);