function pluck_JS(o, names) {
    return names.map(n => o[n]);
}
function pluck_TS(o, names) {
    return names.map(n => o[n]);
}
let person = {
    name: 'dcl',
    age: 23
};
console.log(pluck_TS(person, ['name', 'age']));
let p = { name: 'ys', age: 23 };
console.log(p);
