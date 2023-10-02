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
// console.log(mergedData);

function transformDatabase(mergedData) {
  const newArray = [];

  for (const key in mergedData) {
    const entry = mergedData[key];

    // Tworzymy nowy obiekt na podstawie oryginalnego obiektu
    const newEntry = {
      tiktokId: key, // Przenosimy klucz jako tiktokId
      ...entry,
    };

    // Dodajemy nowy obiekt do tablicy
    newArray.push(newEntry);
  }

  return newArray;
}
const transformedDatabase = transformDatabase(mergedData);
console.log(transformedDatabase);

const currentDate = new Date();
const executionDate = currentDate.toISOString();

// Zapisz wynik wraz z datą uruchomienia do pliku
const outputPath = "../execute/execute.js";
const outputContent = `const data = ${JSON.stringify(
  transformedDatabase,
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

// {
//    {
//     tiktokId: '7212343560396393734',
//     authorId: '6659015207979008005',
//     createTime: 1679254596,
//     diggCount: 16100,
//     playCount: 206000,
//     uniqueId: 'nadejdasendrea8',
//     nickname: 'Nadejda Sendrea',
//     followerCount: 1400000,
//     heartCount: 26700000,
//     videoCount: 3967,
//     itdescription: '',
//     tags: ''
//   },
// };
