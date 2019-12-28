<!---
 license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
-->

# cordova-audio-stream-plugin

Forked from https://github.com/keosuofficial/cordova-audio-stream-plugin
to tailor it for my needs.

As of today (December 2019), the popular [Cordova Media plugin](https://github.com/apache/cordova-plugin-media)
can not stream audio on iOS.
The [Cordova Streaming Media plugin](https://github.com/nchutchind/cordova-plugin-streaming-media) can stream,
but it always does it in the full-screen mode.
This plugin is meant to do just one thing: playback streaming audio on iOS platform with no UI attached.

## Installation

```
cordova plugin add https://github.com/kshabunov/cordova-audio-stream-plugin.git
```
    
## Usage example

```javascript

  // Create new instance
  function onStart() {
    console.log("Audio streaming started");
  }
  function onError(error) {
    console.log('Audio streaming error, code: ' + error.code + ', message: ' + error.message);
  }
  var audioStream = new Stream("http://your.audio/stream", onStart, onError);
  
  // Play audio
  audioStream.play();

  // Stop playback
  audioStream.stop();
  
```
