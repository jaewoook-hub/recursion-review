// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if(typeof(obj) === 'null'){ // input defined?
    return '"' + obj + '"';
  }
  else if(typeof(obj) === 'number'){ // input = number?
    return obj.toString();
  }
  else if(typeof(obj) === 'boolean'){ //input = boolean?
    return obj.toString();
  }
  else if(typeof(obj) === 'string'){ // input = string?
    return '"' + obj + '"';
  }
  else if(Array.isArray(obj)){ // input = array?
    obj = obj.map(function(element){
      return stringifyJSON(element);
    });
    return '[' + obj + ']';
  }
  else if(obj && typeof(obj) === 'object'){ //input = object?
    var output = [];
    for(var x in obj){
      if(typeof(obj[x]) === 'function' || typeof(obj[x]) === 'undefined'){
        // Breaks on iteration to skip over any function or undefined
        continue;
      }
      output.push(stringifyJSON(x) + ':' + stringifyJSON(obj[x])); // Push key + value
    }
    return '{' + output.join() + '}';
  }

  return String(obj);
};


/*

  // 9,
  // null, -> "null"
  // true, -> "true"
  // false,
  // 'Hello world',
  // [], "[]"  '"[]"'
  // [8],=> '8
  // ['hi'],   expected '[hi]' to equal '["hi"]'
  // [8, 'hi'],
  // [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  // [8, [[], 3, 4]],
  // [[[['foo']]]],
  // {},
  {'a': 'apple'},  expected { '"a"': '"apple"' } to equal '{"a":"apple"}'
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}

*/