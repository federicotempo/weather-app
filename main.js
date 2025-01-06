/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n\r\np {\r\n  text-wrap: pretty;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  text-wrap: balance;\r\n}\r\n\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\nbody {\r\n  font-family: \"Arial\", sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  background-color: #f0f0f0;\r\n  color: #333;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n\r\n.app-container {\r\n  width: 90%;\r\n  max-width: 400px;\r\n  background: rgba(255, 255, 255, 0.8);\r\n  border-radius: 16px;\r\n  padding: 20px;\r\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\r\n  text-align: center;\r\n}\r\n\r\n.app-header h1 {\r\n  margin: 0;\r\n  font-size: 1.8rem;\r\n  color: #555;\r\n}\r\n\r\n.search-section {\r\n  margin: 20px 0;\r\n  display: flex;\r\n  gap: 10px;\r\n}\r\n\r\n.city-input {\r\n  flex: 1;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 8px;\r\n  outline: none;\r\n  font-size: 1rem;\r\n  color: #333;\r\n}\r\n\r\n.search-button {\r\n  padding: 10px 15px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #6c757d;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.search-button:hover {\r\n  background: #5a6268;\r\n}\r\n\r\n.weather-info {\r\n  margin-top: 20px;\r\n}\r\n\r\n.location {\r\n  font-size: 1.4rem;\r\n  font-weight: bold;\r\n  color: #444;\r\n}\r\n\r\n.weather-details {\r\n  margin: 20px 0;\r\n  font-size: 1rem;\r\n  text-align: left;\r\n  background: #f8f9fa;\r\n  padding: 15px;\r\n  border-radius: 8px;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.weather-details p {\r\n  margin: 10px 0;\r\n  color: #555;\r\n}\r\n\r\n.toggle-unit {\r\n  padding: 10px 15px;\r\n  border: none;\r\n  border-radius: 8px;\r\n  background: #17a2b8;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  transition: background 0.3s ease;\r\n}\r\n\r\n.toggle-unit:hover {\r\n  background: #138496;\r\n}\r\n\r\n.error-message {\r\n  display: none;\r\n  background-color: #f8d7da;\r\n  color: #721c24;\r\n  border: 1px solid #f5c6cb;\r\n  padding: 15px;\r\n  margin-top: 20px;\r\n  border-radius: 8px;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.error-message p {\r\n  margin: 0;\r\n}\r\n\r\n.error-message.show {\r\n  display: block;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   focusInput: () => (/* binding */ focusInput),\n/* harmony export */   getCityFromUser: () => (/* binding */ getCityFromUser),\n/* harmony export */   handleError: () => (/* binding */ handleError),\n/* harmony export */   handleSwitchButton: () => (/* binding */ handleSwitchButton),\n/* harmony export */   renderData: () => (/* binding */ renderData)\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n\r\n\r\nfunction getCityFromUser() {\r\n  const city = document.querySelector(\"#city-input\").value.toLowerCase();\r\n  return city.split(\" \").join(\"\");\r\n}\r\n\r\nconst renderData = (parameters) => {\r\n  const [temperature, location, windSpeed, humidity, feelsLike, conditions] = parameters;\r\n\r\n  document.querySelector(\"#error-message\").classList.remove(\"show\");\r\n  document.querySelector(\".toggle-unit\").textContent = \"Switch to °C\";\r\n\r\n  document.querySelector(\"#condition\").textContent = conditions;\r\n  document.querySelector(\"#temp\").textContent = temperature;\r\n  document.querySelector(\"#temp-units\").textContent = \"°F\";\r\n  document.querySelector(\"#location\").textContent = location;\r\n  document.querySelector(\"#wind\").textContent = `${windSpeed} mph`;\r\n  document.querySelector(\"#humidity\").textContent = `${humidity}%`;\r\n  document.querySelector(\"#feels-like\").textContent = feelsLike;\r\n  document.querySelector(\"#feels-like-units\").textContent = \"°F\";\r\n};\r\n\r\nconst handleSwitchButton = () => {\r\n  const switchButton = document.querySelector(\".toggle-unit\");\r\n  switchButton.addEventListener(\"click\", changeUnits);\r\n};\r\n\r\nconst changeUnits = () => {\r\n  const temperature = document.querySelector(\"#temp\").textContent;\r\n  const feelsLike = document.querySelector(\"#feels-like\").textContent;\r\n  const currentUnit = document.querySelector(\"#temp-units\").textContent;\r\n  let newUnit = \"\";\r\n\r\n  if (temperature === \"--\") {\r\n    return;\r\n  }\r\n\r\n  if (currentUnit === \"°F\") {\r\n    const celsiusTemp = (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(temperature);\r\n    const celsiusFeelsLike = (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.convertToCelsius)(feelsLike);\r\n    newUnit = \"°C\";\r\n\r\n    document.querySelector(\"#temp\").textContent = celsiusTemp;\r\n    document.querySelector(\"#temp-units\").textContent = newUnit;\r\n    document.querySelector(\"#feels-like\").textContent = celsiusFeelsLike;\r\n    document.querySelector(\"#feels-like-units\").textContent = newUnit;\r\n    document.querySelector(\".toggle-unit\").textContent = \"Switch to °F\";\r\n  } else {\r\n    const fahrenheitTemp = (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.convertToFahrenheit)(temperature);\r\n    const fahrenheitFeelsLike = (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.convertToFahrenheit)(feelsLike);\r\n    newUnit = \"°F\";\r\n\r\n    document.querySelector(\"#temp\").textContent = fahrenheitTemp;\r\n    document.querySelector(\"#temp-units\").textContent = newUnit;\r\n    document.querySelector(\"#feels-like\").textContent = fahrenheitFeelsLike;\r\n    document.querySelector(\"#feels-like-units\").textContent = newUnit;\r\n    document.querySelector(\".toggle-unit\").textContent = \"Switch to °C\";\r\n  }\r\n};\r\n\r\nconst handleError = () => {\r\n  document.querySelector(\"#error-message\").classList.add(\"show\");\r\n};\r\n\r\nconst focusInput = () => {\r\n  window.addEventListener(\"load\", function () {\r\n    const inputField = document.querySelector(\"#city-input\");\r\n    inputField.focus();\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/domManipulation.js?");

/***/ }),

/***/ "./src/getImage.js":
/*!*************************!*\
  !*** ./src/getImage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeBackgroundImage: () => (/* binding */ changeBackgroundImage)\n/* harmony export */ });\nfunction getImage(conditions) {\r\n  const normalizedCondition = conditions.toLowerCase();\r\n\r\n  switch (true) {\r\n    case normalizedCondition.includes(\"snow\"):\r\n      return 'url(\"https://images.unsplash.com/photo-1477601263568-180e2c6d046e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")';\r\n\r\n    case normalizedCondition.includes(\"rain\") ||\r\n      normalizedCondition.includes(\"storm\"):\r\n      return 'url(\"https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")';\r\n\r\n    case normalizedCondition.includes(\"sunny\") ||\r\n      normalizedCondition.includes(\"clear\"):\r\n      return 'url(\"https://images.unsplash.com/photo-1499346030926-9a72daac6c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920\")';\r\n\r\n    case normalizedCondition.includes(\"cloud\") ||\r\n      normalizedCondition.includes(\"overcast\"):\r\n      return 'url(\"https://images.unsplash.com/photo-1469365556835-3da3db4c253b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")';\r\n  }\r\n}\r\n\r\nfunction changeBackgroundImage(conditions) {\r\n  document.body.style.backgroundColor = \"none\";\r\n\r\n  const backgroundImage = getImage(conditions);\r\n  document.body.style.background = backgroundImage;\r\n  document.body.style.backgroundSize = \"cover\";\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/getImage.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertToCelsius: () => (/* binding */ convertToCelsius),\n/* harmony export */   convertToFahrenheit: () => (/* binding */ convertToFahrenheit),\n/* harmony export */   getConditions: () => (/* binding */ getConditions),\n/* harmony export */   getFeelsLike: () => (/* binding */ getFeelsLike),\n/* harmony export */   getHumidity: () => (/* binding */ getHumidity),\n/* harmony export */   getLocation: () => (/* binding */ getLocation),\n/* harmony export */   getTemperature: () => (/* binding */ getTemperature),\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   getWindSpeed: () => (/* binding */ getWindSpeed)\n/* harmony export */ });\nasync function getWeather(city) {\r\n  try {\r\n    let response = await fetch(\r\n      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2VZAENS7BKUDBFCYA3CCTQXQC`\r\n    );\r\n\r\n    if (!response.ok) {\r\n      throw new Error(`Ciudad inválida. Código: ${response.status}`);\r\n    }\r\n\r\n    let data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    return { error: \"Por favor, ingresa una ciudad válida\" };\r\n  }\r\n}\r\n\r\nconst getTemperature = (data) => {\r\n  const temperature = data.currentConditions.temp;\r\n  return temperature;\r\n};\r\n\r\nconst getLocation = (data) => {\r\n  const location = data.resolvedAddress;\r\n  return location;\r\n};\r\n\r\nconst getFeelsLike = (data) => {\r\n  const feelsLike = data.currentConditions.feelslike;\r\n  return feelsLike;\r\n};\r\n\r\nconst getWindSpeed = (data) => {\r\n  const windSpeed = data.currentConditions.windspeed;\r\n  return windSpeed;\r\n};\r\n\r\nconst getHumidity = (data) => {\r\n  const humidity = data.currentConditions.humidity;\r\n  return humidity;\r\n};\r\n\r\nconst getConditions = (data) => {\r\n  const conditions = data.currentConditions.conditions;\r\n  return conditions;\r\n}\r\n\r\nconst convertToCelsius = (fahrenheit) => {\r\n  const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(1);\r\n  return celsius;\r\n};\r\n\r\nconst convertToFahrenheit = (celsius) => {\r\n  const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(1);\r\n  return fahrenheit;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/getWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ \"./src/domManipulation.js\");\n/* harmony import */ var _getImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getImage */ \"./src/getImage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst handleSearchButton = () => {\r\n  const searchButton = document.querySelector(\".search-button\");\r\n  searchButton.addEventListener(\"click\", search);\r\n  document.addEventListener(\"keydown\", function (event) {\r\n    if (event.key === \"Enter\") {\r\n      search();\r\n    }\r\n  });\r\n};\r\n\r\nconst search = async () => {\r\n  const city = (0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.getCityFromUser)();\r\n\r\n  if (city !== \"\") {\r\n    const data = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)(city);\r\n\r\n    if (data.error) {\r\n      (0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.handleError)();\r\n    } else {\r\n      const temperature = (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getTemperature)(data);\r\n      const location = (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getLocation)(data);\r\n      const windSpeed = (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWindSpeed)(data);\r\n      const humidity = (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getHumidity)(data);\r\n      const feelsLike = (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getFeelsLike)(data);\r\n      const conditions = (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getConditions)(data);\r\n\r\n      const parameters = [\r\n        temperature,\r\n        location,\r\n        windSpeed,\r\n        humidity,\r\n        feelsLike,\r\n        conditions,\r\n      ];\r\n      (0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.renderData)(parameters);\r\n      (0,_getImage__WEBPACK_IMPORTED_MODULE_3__.changeBackgroundImage)(conditions);\r\n\r\n    }\r\n  }\r\n};\r\n\r\nfunction initialize() {\r\n  handleSearchButton();\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.focusInput)();\r\n  (0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.handleSwitchButton)();\r\n}\r\n\r\ninitialize();\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;