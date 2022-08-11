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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (() => {

eval("var form = document.getElementById('form');\nvar itemName = document.getElementById('itemName');\nvar itemPrice = document.getElementById('itemPrice');\nvar total = document.getElementById('total');\nvar cash = document.getElementById('cash');\nvar change = document.getElementById('change');\nvar list = document.getElementById('list');\nvar tbody = document.getElementById('tbody');\nvar q = document.getElementById('q');\n\nvar _final = document.getElementById('final');\n\nvar phone = document.getElementById('phone');\nvar date = document.getElementById('date');\nvar time = document.getElementById('time');\nvar y = document.getElementById('year');\nvar today = new Date();\nvar year = today.getFullYear();\nvar month = today.getMonth();\nvar day = today.getDay();\nvar currentDate = \"\".concat(day, \"/\").concat(month, \"/\").concat(year);\nvar currentTime = today.toLocaleTimeString();\nvar phoneNo = \"Phone: (+880) 1700539061\";\nvar sum = 0;\nvar c = '';\ndate.innerText = currentDate;\nphone.innerText = phoneNo;\ny.innerText = year;\ntime.innerText = currentTime;\nform.addEventListener('submit', function (e) {\n  e.preventDefault();\n  var item = itemName.value;\n  var quantity = Math.abs(q.value);\n  var price = Math.abs(itemPrice.value);\n\n  if (item == '') {\n    itemName.style.border = '2px dashed red';\n    itemName.setAttribute('placeholder', 'Item Name Required');\n    return false;\n  } else {\n    itemName.style.border = '2px dashed green';\n  }\n\n  if (quantity == '' || quantity < 1) {\n    q.style.border = '2px dashed red';\n    q.setAttribute('placeholder', 'no.');\n    console.log(quantity);\n    return false;\n  } else {\n    q.style.border = '2px dashed green';\n  }\n\n  if (price == '' || isNaN(price)) {\n    itemPrice.style.border = '2px dashed red';\n    itemPrice.setAttribute('placeholder', 'Item Price Required');\n\n    if (isValid) {\n      alert(\"Price Can be Only Number!\\nYou Inserted: (\".concat(itemPrice.value, \"), which is not a number!\"));\n      return false;\n    }\n\n    return false;\n  } else {\n    itemPrice.style.border = '2px dashed green';\n  }\n\n  if (item != '' && price != '' && quantity != '') {\n    itemName.style.border = '2px dashed #ddd';\n    itemPrice.style.border = '2px dashed #ddd';\n    q.style.border = '2px dashed #ddd';\n  }\n\n  updateIDs(item, quantity, price);\n  var priceSet = [];\n  priceSet.push(price * quantity);\n\n  for (var _i = 0, _priceSet = priceSet; _i < _priceSet.length; _i++) {\n    var v = _priceSet[_i];\n    sum += v;\n  }\n\n  finalCalculation();\n  form.reset();\n  console.log(c);\n});\nvar n = 1;\n\nfunction updateIDs(item, quantity, price) {\n  var newElement = document.createElement('tr');\n  var newList = \"list\".concat(n);\n  newElement.setAttribute('id', newList);\n  var newTd1 = document.createElement('td');\n  var newTd2 = document.createElement('td');\n  newElement.appendChild(newTd1);\n  newElement.appendChild(newTd2);\n  var iID = \"i\".concat(n);\n  var pID = \"p\".concat(n);\n  var id1 = newElement.children[0];\n  var newSpan = document.createElement('span');\n  newElement.children[1].appendChild(newSpan);\n  var id2 = newElement.children[1].children[0];\n  tbody.appendChild(newElement);\n  id1.setAttribute('id', iID);\n  id2.setAttribute('id', pID);\n  id1.appendChild(document.createTextNode(\"(\".concat(n, \") \").concat(item, \"*\").concat(quantity)));\n  id2.appendChild(document.createTextNode(price));\n  n++;\n}\n\nfunction finalCalculation() {\n  total.innerText = sum;\n  cash.innerText = c;\n  change.innerText = c - sum;\n}\n\n_final.addEventListener('click', function (e) {\n  if (c == '') {\n    while (c == '') {\n      c = prompt('Please Enter how much Cash you recive:');\n      c = Math.abs(c);\n\n      if (isNaN(c)) {\n        c = '';\n      }\n    }\n  }\n\n  finalCalculation();\n  window.print();\n  return false;\n});\n\n//# sourceURL=webpack://es6-setup/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"]();
/******/ 	
/******/ })()
;