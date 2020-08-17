// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  if (obj === null) {
    return 'null';
  } else if (obj === {}) {
    return '{}';
  } else if (typeof (obj) === 'number' || typeof (obj) === 'boolean') {
    return `${obj}`;
  } else if (typeof (obj) === 'string') {
    return '"' + `${obj}` + '"';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      obj.forEach(function (item) { stringifyJSON(item); });
    }
  }
};




/*

  // 9,
  // null, -> "null"
  // true, -> "true"
  // false,
  // 'Hello world',
  // [], "[]"  '"[]"'
  [8],
  ['hi'],   expected '[hi]' to equal '["hi"]'
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}

undefined
empty obj
strings "test" => ""test""
integer 15 => "15"

Array [1, 'test', [50]] => "[1,"test",[50]]"
Object
*/