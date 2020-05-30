const fp = require('lodash/fp');
const { Maybe, Container } = require('./support');

// 练习1
let maybe = Maybe.of([5, 6, 1]);
let ex1 = function(functor) {
    return functor.map(fp.map(fp.add(1)));
}
console.log('练习1:', ex1(maybe));

// 练习2
let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
let ex2 = function(functor) {
    return functor.map(fp.first)._value;
}
console.log('练习2:', ex2(xs));

// 练习3
let safeProp = fp.curry(function(x, o) {
    return Maybe.of(o[x]);
});
let user = { id: 2, name: 'Albert' };
let ex3 = function(obj) {
    return safeProp('name', obj).map(fp.first)._value;
}
console.log('练习3:', ex3(user));

// 练习4
let ex4 = function(n) {
    return Maybe.of(n).map(parseInt)._value;
}
console.log('练习4:', ex4('444'), ex4());