const fs = require("fs");

const { newdb } = require("../execute/data.js");
const { transformedDbvd } = require("../execute/dbvd.js");

// console.log(newdb);
// console.log(transformedDbvd);

const mergedData = {};

for (const key in newdb) {
  if (newdb.hasOwnProperty(key) && transformedDbvd.hasOwnProperty(key)) {
    mergedData[key] = {
      ...newdb[key],
      ...transformedDbvd[key],
    };
  }
}
console.log(mergedData);

const currentDate = new Date();
const executionDate = currentDate.toISOString();

// Zapisz wynik wraz z datą uruchomienia do pliku
const outputPath = "../execute/execute.js";
const outputContent = `const data = ${JSON.stringify(
  mergedData,
  null,
  2
)};\n\n// Nowe dane zostały dodane do pliku: ${executionDate}\n\n`;

fs.appendFile(outputPath, outputContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Nowe dane zostały dodane do pliku: ${outputPath}`);
});
