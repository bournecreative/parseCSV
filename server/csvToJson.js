const fs = require("fs");
csvFile = fs.readFileSync("./houseHoldDebt.csv");

function csvToJSON() {
  const jsonObj = [];
  const arr = csvFile.toString().replace(/\r/g, "").split("\n");
  const headers = arr[0].split(",").map((i) => i.toLowerCase());
  jsonObj.push(headers);
  for (let i = 1; i < arr.length; i++) {
    const row = arr[i].split(",");
    const objRow = {};
    row.map((i, index) => {
      objRow[`${headers[index]}`] = i.toLowerCase();
    });
    jsonObj.push(objRow);
  }
  return jsonObj;
}

module.exports.csvToJSON = csvToJSON;
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
