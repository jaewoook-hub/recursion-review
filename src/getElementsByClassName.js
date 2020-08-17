// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  var container = [];
  //if element has class, add to container
  var checkClasses = function (current) {
    if (current.classList.contains(className)) {
      container.push(current);
    }

    //check for children and class, if child has class, add to container
    for (var i = 0; i < current.children.length; i++) {
      var child = current.children[i];
      checkClasses(child);
    }
  };

  checkClasses(document.body);
  return container;
};


/*

true
  [div#mocha, div.targetClassName, mocha: div#mocha]      #text
true

You should use document.body, element.childNodes, and element.classList

actual:
[body.targetClassName]

expected:
[body.targetClassName, div.targetClassName]


body
div /div
div /div
/body

body - 2 children
div1
div2
*/