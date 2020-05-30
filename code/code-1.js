const fp = require('lodash/fp')
const { cars } = require('./data');

// 第一题
let isLastInstock = fp.flowRight(fp.prop('in_stock'), fp.last);
console.log('第一题：', isLastInstock(cars));

// 第二题
let getFirstCarName = fp.flowRight(fp.prop('name'), fp.first);
console.log('第二题：', getFirstCarName(cars));

// 第三题
let _average = function(xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length;
}

let averageDollarValue = fp.flowRight(_average, fp.map(fp.prop('dollar_value')));
console.log('第三题：', averageDollarValue(cars));

// 第四题
let _underscore = fp.replace(/\W+/g, '_');

let sanitizeNames = fp.map(fp.flowRight(fp.toLower, _underscore));

console.log('第四题：', sanitizeNames(['Hello World']));
