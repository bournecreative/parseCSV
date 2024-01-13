const http = require("http");
const getCSV = require("./csvToJson");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/javascript",
  });
  if (req.url === "/") {
    const test = getCSV.csvToJSON();
    res.write(JSON.stringify(test));
    res.end();
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
