/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function setup() {
  var EX = {};

  EX.addToIndex = function (index, prop, obj, item) {
    var key = obj[prop], dict = index[prop], list;
    if (!dict) { index[prop] = dict = Object.create(null); }
    list = dict[key];
    if (!list) { dict[key] = list = []; }
    list[list.length] = item;
  };

  EX.deepCopy = function deepCopy(data) { return deepCopy.prepare(data)(); };
  EX.deepCopy.prepare = function (data) {
    return JSON.parse.bind(JSON, JSON.stringify(data));
  };

  EX.searchIndex = function (index, prop, val) {
    return EX.deepCopy(index[prop][val]);
  };

  return EX;
}());
