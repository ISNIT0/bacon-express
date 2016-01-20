let events = Bacon.fromWebsocket('/events');

events.onValue((a) => console.log(a));