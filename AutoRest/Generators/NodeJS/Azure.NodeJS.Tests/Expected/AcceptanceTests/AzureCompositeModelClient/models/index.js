/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.Product = require('./product');
exports.CatalogDictionary = require('./catalogDictionary');
exports.CatalogArray = require('./catalogArray');
exports.CatalogArrayOfDictionary = require('./catalogArrayOfDictionary');
exports.CatalogDictionaryOfArray = require('./catalogDictionaryOfArray');
exports.ErrorModel = require('./errorModel');
exports.Basic = require('./basic');
exports.Pet = require('./pet');
exports.Cat = require('./cat');
exports.Dog = require('./dog');
exports.Siamese = require('./siamese');
exports.Fish = require('./fish');
exports.Salmon = require('./salmon');
exports.Shark = require('./shark');
exports.Sawshark = require('./sawshark');
exports.Goblinshark = require('./goblinshark');
exports.Cookiecuttershark = require('./cookiecuttershark');
exports.IntWrapper = require('./intWrapper');
exports.LongWrapper = require('./longWrapper');
exports.FloatWrapper = require('./floatWrapper');
exports.DoubleWrapper = require('./doubleWrapper');
exports.BooleanWrapper = require('./booleanWrapper');
exports.StringWrapper = require('./stringWrapper');
exports.DateWrapper = require('./dateWrapper');
exports.DatetimeWrapper = require('./datetimeWrapper');
exports.Datetimerfc1123Wrapper = require('./datetimerfc1123Wrapper');
exports.DurationWrapper = require('./durationWrapper');
exports.ByteWrapper = require('./byteWrapper');
exports.ArrayWrapper = require('./arrayWrapper');
exports.DictionaryWrapper = require('./dictionaryWrapper');
exports.discriminators = {
  'Fish' : exports.Fish,
  'salmon' : exports.Salmon,
  'shark' : exports.Shark,
  'sawshark' : exports.Sawshark,
  'goblin' : exports.Goblinshark,
  'cookiecuttershark' : exports.Cookiecuttershark
};
