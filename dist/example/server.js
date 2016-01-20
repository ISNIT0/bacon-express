'use strict';

var _baconjs = require('baconjs');

var _baconjs2 = _interopRequireDefault(_baconjs);

var _server = require('../server.js');

var _server2 = _interopRequireDefault(_server);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _server2.default)(app);

var Events = _baconjs2.default.Bus();

app.use(_express2.default.static('./'));
app.use(_express2.default.static('../'));
app.use(_express2.default.static('../../public'));

app.get('/', function (req, res) {
    res.send(_fs2.default.readFileSync('./index.html', 'utf8'));
});

app.bacon('/events', Events, function () {
    return Events.push('Hi there!');
});

app.listen(1337);

Events.onValue(function (a) {
    return console.log(a);
});