'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (app) {

    (0, _expressWs2.default)(app);

    app.bacon = function (path, stream, handler) {
        app.ws(path, function (ws, req) {
            var initialised = false;
            ws.on('message', function (message) {
                if (!initialised) return initialised = true && (handler || Object)(req);
                stream.push(message);
            });

            stream.onValue(function (value) {
                ws.send(value);
            });
        });
    };
};

var _expressWs = require('express-ws');

var _expressWs2 = _interopRequireDefault(_expressWs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;