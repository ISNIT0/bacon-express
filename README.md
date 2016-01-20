# Bacon Express
Link Bacon streams over the network

### Installation
#### Node
```bash
npm i bacon-express
```

#### Browser
```html
<script src='' type='text/javascript'></script>
```

### Usage

#### Node
```javascript
var app = express();
baconExpress(app);

var Events = Bacon.Bus();

app.bacon('/events', Events); // (HTTPpath, stream, handler?)
```

#### Browser
```javascript
var Events = Bacon.fromWebsocket('/events'); //Relative or absolute Websocket path (ws://localhost:1337/events)

Events.onValue(function(a) {
  console.log(a);
});
```

In the above example, the Events stream (Bus in this case) from both the server and client are in sync.
