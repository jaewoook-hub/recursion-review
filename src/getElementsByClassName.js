// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className, current = document.body
) {
  var container = [];

  //if thing has element w/ class, add to container
  if (current.className === className) {
    container.push(current);
  }

  //if thing doesn't have element w/ class, check for children
  for (var i = 0; i < current.children.length; i++) {
    var child = current.children[i];
    getElementsByClassName(className, child);
  }

  console.log(container);
  return container;
};
