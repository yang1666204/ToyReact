for (const iterator of [1, 2, 3]) {
  console.log("iterator", iterator);
}
function createElement(tagName, attributes, ...children) {
  var node = document.createElement(tagName);
  for (item in attributes) {
      node.setAttribute(item,attributes[item]);
  }
  for (const i of children) {
    if (typeof i == "string") {
      i = document.createTextNode(i);
    }
    node.appendChild(i);
  }
  return node;
}
document.body.appendChild(
  <div class="aa" id="bb">
    hh
    <span>hello world</span>
    heihei
  </div>
);
