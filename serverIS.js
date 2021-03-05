var http = require("http");
function onRequest(request, response) {
  console.log("Peticion Recibida.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("PRIMER PARCIAL INGENIERIA DE SOFTWARE, 3190-13-14263 - Jose Gregorio Rene Lopez Cartagena");
  response.end();
}
http.createServer(onRequest).listen(4444);
console.log("Servidor Iniciado.");
