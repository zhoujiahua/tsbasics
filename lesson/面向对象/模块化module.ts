/**
 * 模块化使用
 * 
 * 浏览器识别模块化
 * <script src="https://cdn.bootcdn.net/ajax/libs/systemjs/0.21.6/system.js"></script>
 * */
import * as ma from './modules/ma';
import { PP, sumStr } from './modules/mb';

console.log(ma.PI, ma.sumOne(18));
console.log(PP, sumStr('jerry'));


