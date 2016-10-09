/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var eq = require('assert').deepStrictEqual, taxo1, taxo2, path,
  exdataFelidae = require('exdata-taxonomy-misc-felidae');

path = exdataFelidae.findPaths('oldid', 742216395);
eq(path, [ ['Felinae', 'Lynx', 'rufus', 'wp-en'] ]);

taxo1 = exdataFelidae.taxo();
taxo1.Felinae.Lynx.rufus.commonName = 'bobcat';
taxo2 = exdataFelidae.taxo();

eq(taxo1.Felinae.Lynx.rufus.commonName, 'bobcat');
eq(taxo2.Felinae.Lynx.rufus.commonName, undefined);





console.log('+OK tests passed');
