# isClass
> Checks whether a value is class

## Install
npm:
```
$ npm install isclass --save
```

yarn:
```
$ yarn add isclass
```

## Example
```js
const isClass = require('isclass');

console.log(isClass("hello world")); // > false
console.log(isClass(function() {})); // > false
console.log(isClass(class {})); // > true
console.log(isClass(() => {})); // > false
console.log(isClass(123)); // > false
console.log(isClass({})); // > false
console.log(isClass([])); // > false
```

## LICENSE
[MIT](./LICENSE "The MIT License")
