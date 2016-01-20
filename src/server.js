import expressWs from 'express-ws';

export default function (app) {

    expressWs(app);

    app.bacon = function (path, stream, handler) {
        app.ws(path, function (ws, req) {
            let initialised = false;
            ws.on('message', function (message) {
                if(!initialised)
                    return initialised = true && (handler || Object)(req);
                stream.push(message);
            });
            
            stream.onValue(function(value){
                ws.send(value);
            });
        });
    };

};