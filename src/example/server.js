import Bacon from 'baconjs';
import baconExpress from '../server.js';
import express from 'express';
import fs from 'fs';

let app = express();
baconExpress(app);

let Events = Bacon.Bus();

app.use(express.static('./'));
app.use(express.static('../'));
app.use(express.static('../../public'));

app.get('/', function (req, res) {
    res.send(fs.readFileSync('./index.html', 'utf8'));
});

app.bacon('/events', Events, () => Events.push('Hi there!'));

app.listen(1337);

Events.onValue((a)=>console.log(a))
