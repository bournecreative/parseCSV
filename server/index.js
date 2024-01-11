const http = require("http");
const getCSV = require("./csvToJson");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const test = getCSV.csvToJSON();
    res.write(JSON.stringify(test));
    res.end();
  }
});

server.listen(3000);

console.log("Listening");

// for (let j = 0; j < row.length; j++) {
//   obj[headers[j].trim()] = row[j].trim();
// }
// jsonObj.push(obj);

// console.log(jsonObj);
// console.log(jsonObj);
// const sortedByYear = jsonObj.sort(
//   (a, b) => parseInt(a.TIME) - parseInt(b.TIME)
// );

// sortedByYear.map((item) => {
//   console.log(`Country:${item.LOCATION} Year:${item.TIME} Debt:${item.Value}`);
// });
