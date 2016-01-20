let events = Bacon.fromWebsocket('ws://localhost:1337/events');

events.onValue((a) => console.log(a));