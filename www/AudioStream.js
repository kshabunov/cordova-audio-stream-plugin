/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

var argscheck = require('cordova/argscheck');
var utils = require('cordova/utils');
var exec = require('cordova/exec');

var mediaObjects = {};

/**
 * @constructor
 * @param src the stream url
 * @param onStart the callback to be called on playing start.
 * @param errorCallback the callback to be called on error.
 */
var AudioStream = function(src, onStart, errorCallback) {
  argscheck.checkArgs("SFF", "AudioStream", arguments);
  this.id = utils.createUUID();
  mediaObjects[this.id] = this;
  this.src = src;
  this.onStart = onStart;
  this.errorCallback = errorCallback;
  exec(null, this.errorCallback, "AudioStream", "create", [this.id, this.src]);
};


// "static" function to return existing objs.
AudioStream.get = function(id) {
  return mediaObjects[id];
};

/**
 * Start or resume playing audio file.
 */
AudioStream.prototype.play = function() {
  exec(null, this.errorCallback, "AudioStream", "startPlayingAudio", [this.id, this.src]);
};

/**
 * Stop playing audio file.
 */
AudioStream.prototype.stop = function() {
  exec(null, this.errorCallback, "AudioStream", "stopPlayingAudio", []);
};

AudioStream.onStart = function(id) {
  var media = mediaObjects[id];
  if (media && media.onStart) {
    media.onStart();
  }
};

module.exports = AudioStream;
