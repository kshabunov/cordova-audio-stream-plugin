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

Forked from https://github.com/keosuofficial/cordova-audio-stream-plugin to add some features required for my project.

The cordova-plugin-media plugin does not allow to play streaming audio on iOS. This can do that.  

#Installation
Run 
    cordova plugin add https://github.com/kshabunov/cordova-audio-stream-plugin.git
    
#Use it
    my_stream = new Stream("http://your_live_radio_streeam", onSuccess, onError);
    // Play audio
    my_stream.play();
    function onSuccess() {
        console.log("playAudio():Audio Success");
    }
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
    }

You can also stop the music with
    my_stream.stop();
