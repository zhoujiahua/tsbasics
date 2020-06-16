const dbUrl = 'xxxxxx';
export function getData(): any[] {
    console.log('获取数据');
    return [
        { id: 1 },
        { name: 'jiahua' },
        { url: dbUrl }
    ]
}