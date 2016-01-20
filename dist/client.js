'use strict';

(function (Bacon) {
    Bacon.fromWebsocket = function (websocket, protocol) {
        var Stream = Bacon.Bus();
        if (typeof websocket == 'string') {
            //We have a path to websocket
            if (!(~websocket.indexOf('ws://') || ~websocket.indexOf('wss://'))) websocket = location.href.replace('https://', 'wss://').replace('http://', 'ws://') + websocket;
            websocket = new WebSocket(websocket, protocol);
        };

        var curValue = undefined;

        Stream.onValue(function (value) {
            if (!value.baconExpressReceived) websocket.send(value);
        });

        websocket.onopen = function () {
            websocket.send('Connected!');
        };
        websocket.onmessage = function (message) {
            if (message.data) {
                var data = Object(message.data);
                data.baconExpressReceived = true;
                Stream.push(data);
            }
        };

        return Stream;
    };
})(Bacon);