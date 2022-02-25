/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var eq = require('assert').deepStrictEqual, taxo1, taxo2, paths, found,
  exdataFelidae = require('exdata-taxonomy-misc-felidae');

paths = exdataFelidae.findPaths('oldid', 742216395);
eq(paths.length, 1);
eq(paths[0], ['Felinae', 'Lynx', 'rufus', 'wp-en']);

taxo1 = exdataFelidae.taxo();
taxo1.Felinae.Lynx.rufus.commonName = 'bobcat';
taxo2 = exdataFelidae.taxo();

eq(taxo1.Felinae.Lynx.rufus.commonName, 'bobcat');
eq(taxo2.Felinae.Lynx.rufus.commonName, undefined);

found = exdataFelidae.findByType('genus');
eq(found.keys.sort().slice(0, 3), ['Felis', 'Lynx', 'Neofelis']);
eq(found.dict.Felis[''], 'genus');
eq(found.dict.Felis.silvestris[''], 'species');

found = exdataFelidae.findByType('species');
eq(found.keys.sort().slice(0, 3), ['bengalensis', 'leo', 'manul']);
eq(found.dict.leo[''], 'species');
eq(found.dict.leo['wp-en'].oldid, 741625599);






console.log('+OK tests passed');
