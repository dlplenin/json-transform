import * as transform from 'jsonpath-object-transform';
// import transform = require('jsonpath-object-transform');

var template = {
  foo: ['$.some.crazy', {
    bar: '$.example'
  }]
};

var data = {
  some: {
    crazy: [
      {
        example: 'A'
      },
      {
        example: 'B'
      }
    ]
  }
};

var result = transform(data, template);
console.log('result: ', result);

// correr en consola 
// npm install -g typescript
// 1) tsc .\testTS.ts  -->> (esto genera el archivo testTS.js)
// 2) node .\testTS.js