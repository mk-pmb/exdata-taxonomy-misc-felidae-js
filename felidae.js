/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function setup() {
  var EX = {}, oc0 = Object.create.bind(Object, null),
    treeUtil = require('./lib/tree-util.js'), pathBy = oc0(),
    taxo = treeUtil.deepCopy(require('./lib/felidae.json')), addPath;
  addPath = treeUtil.addToIndex.bind(null, pathBy);

  (function scan(obj, path) {
    if (obj.oldid !== undefined) { addPath('oldid', obj, path); }
    if ((typeof obj) === 'object') {
      Object.keys(obj).forEach(function (key) {
        scan(obj[key], path.concat(key));
      });
    }
  }(taxo, []));

  EX.taxo = treeUtil.deepCopy.prepare(taxo);
  EX.findPaths = treeUtil.searchIndex.bind(null, pathBy);

  return EX;
}());
