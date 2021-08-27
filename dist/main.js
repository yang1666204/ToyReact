/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ (() => {

eval("for (var _i = 0, _arr = [1, 2, 3]; _i < _arr.length; _i++) {\n  var iterator = _arr[_i];\n  console.log(\"iterator\", iterator);\n}\n\nfunction createElement(tagName, attributes) {\n  var node = document.createElement(tagName);\n\n  for (item in attributes) {\n    node.setAttribute(item, attributes[item]);\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  for (var _i2 = 0, _children = children; _i2 < _children.length; _i2++) {\n    var i = _children[_i2];\n\n    if (typeof i == \"string\") {\n      i = document.createTextNode(i);\n    }\n\n    node.appendChild(i);\n  }\n\n  return node;\n}\n\ndocument.body.appendChild(createElement(\"div\", {\n  \"class\": \"aa\",\n  id: \"bb\"\n}, \"hh\", createElement(\"span\", null, \"hello world\"), \"heihei\"));\n\n//# sourceURL=webpack://toyreact/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.js"]();
/******/ 	
/******/ })()
;