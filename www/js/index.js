/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
function initPushwoosh()
{
	alert('initPushwoosh');
    //get pushwoosh plugin
    var pushNotification = window.plugins.pushNotification;
	alert(pushNotification.toSource());
    //notify plugin that device is ready, this is VERY important as it will dispatch on start push notification
    pushNotification.onDeviceReady();
 
    //register for push notifications
    pushNotification.registerDevice({ projectid: "524682876054", appid : "CDB9D-5414F" },
        function(status) {
            //this is push token
            var pushToken = status;
            console.warn('push token: ' + pushToken);
			alert('push token: ' + pushToken);
        },
        function(status) {
            console.warn(JSON.stringify(['failed to register ', status]));
			 alert(JSON.stringify(['failed to register ', status]));
        }
    );
 
    //this function gets called when push notifications has been received
    document.addEventListener('push-notification', function(event) {
        var title = event.notification.title;
            var userData = event.notification.userdata;
                                 
            if(typeof(userData) != "undefined") {
            console.warn('user data: ' + JSON.stringify(userData));
			alert('user data: ' + JSON.stringify(userData));
        }
                                     
        alert(title);
    });
}
 
 
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener("deviceready", initPushwoosh, true);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
	},
   // Update DOM on a Received Event
	receivedEvent: function(id) {
	angular.bootstrap(document, ["myApp"]);
	var parentElement = document.getElementById(id);
	//var listeningElement = parentElement.querySelector('.listening');
	//var receivedElement = parentElement.querySelector('.received');
	//listeningElement.setAttribute('style', 'display:none;');
	//receivedElement.setAttribute('style', 'display:block;');
	alert('Received Event: ' + id);
	}
};