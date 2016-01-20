'use strict';

var events = Bacon.fromWebsocket('ws://localhost:1337/events');

events.onValue(function (a) {
  return console.log(a);
});