const fs = require("fs");
csvFile = fs.readFileSync("./houseHoldDebt.csv");
const arr = csvFile.toString().replace(/\r/g, "").split("\n");

const jsonObj = [];
const headers = arr[0].split(",");
for (let i = 0; i < arr.length; i++) {
  const row = arr[i].split(",");
  const objRow = [];
  row.map((i, index) => {
    const obj = { [`${headers[index]}`]: i };
    objRow.push(obj);
  });

  jsonObj.push(objRow);
  const JSONObj = JSON.stringify(jsonObj);

  // for (let j = 0; j < row.length; j++) {
  //   obj[headers[j].trim()] = row[j].trim();
  // }
  // jsonObj.push(obj);
}
// console.log(jsonObj);
// console.log(jsonObj);
// const sortedByYear = jsonObj.sort(
//   (a, b) => parseInt(a.TIME) - parseInt(b.TIME)
// );

// sortedByYear.map((item) => {
//   console.log(`Country:${item.LOCATION} Year:${item.TIME} Debt:${item.Value}`);
// });
