var transform = require('jsonpath-object-transform');

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
// node .\test.js