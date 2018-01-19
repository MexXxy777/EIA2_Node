//homogenes Array besteht aus nur einem Datentyp und nicht aus mehreren Strukturierten
//In Zeile 47 wird die URL-STring in ein URL Objekt umgewandelt
//Zeile 49 For Schleife
//The Access-Control-Allow-Origin header indicates whether a resource can be shared based by returning the value of the Origin request header, "*", or "null" in the response
"use strict";
// Node-Http-Modul importieren
const Http = require("http");
// Node-Url-Modul importieren
const Url = require("url");
var ServerTest;
(function (ServerTest) {
    // Port vom Process-Objekt erfragen 
    let port = process.env.PORT;
    // Port nicht definiert -> lokale Maschine, Port selbst definieren
    if (port == undefined)
        port = 8100;
    // Server-Objekt kreieren
    let server = Http.createServer();
    // Event-Handler installieren
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    // Auf dem Port horchen
    server.listen(port);
    // Listening-Event: Rückmeldung wenn horchen läuft
    function handleListen() {
        console.log("Server listening on port " + port);
    }
    // Request-Event: Verarbeiten der Request und erstellen der Response
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmen!!");
        // Header: Antwort kommt im HTML-Format mit uft-8
        _response.setHeader("content-type", "text/html; charset=utf-8");
        // Header: ?
        _response.setHeader("Access-Control-Allow-Origin", "*");
        // Response-Body
        _response.write("Vielen Dank - Deine Bestellung ist bei uns wie folgt eingegangen:" + "<br>" + "Schubkarre" + "<br>");
        // v
        let query = Url.parse(_request.url, true).query;
        // ?
        for (let key in query)
            _response.write(key + ": " + query["Baumart"] + "<br>");
        // Antwort abschließen und abschicken
        _response.end();
    }
})(ServerTest || (ServerTest = {}));
//# sourceMappingURL=ServerTest.js.map