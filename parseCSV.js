const fs = require("fs");
csvFile = fs.readFileSync("./houseHoldDebt.csv");
const arr = csvFile.toString().replace(/\r/g, "").split("\n");

const jsonObj = [];
const headers = arr[0].split(",");
for (let i = 0; i < arr.length; i++) {
  const row = arr[i].split(",");
  let obj = {};
  for (let j = 0; j < row.length; j++) {
    obj[headers[j].trim()] = row[j].trim();
  }
  jsonObj.push(obj);
}

const sortedByYear = jsonObj.sort(
  (a, b) => parseInt(a.TIME) - parseInt(b.TIME)
);

sortedByYear.map((item) => {
  console.log(`Country:${item.LOCATION} Year:${item.TIME} Debt:${item.Value}`);
});
