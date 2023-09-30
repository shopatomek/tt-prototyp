const { transformedDba } = require("../execute/dba.js");
const { transformedDbv } = require("../execute/dbv.js");

const fs = require("fs");

// Ścieżki do plików do wczytania i wykonania skryptu
const pathToFile1 = "../execute/dba.js";
const pathToFile2 = "../execute/dbv.js";

// Ścieżka do pliku, w którym zostanie dodany wynik
const pathToOutputFile = "../data/data.js";

// Wczytanie zawartości pliku 1
const file1Content = fs.readFileSync(pathToFile1, "utf8");

// Wykonanie skryptu z pliku 1
eval(file1Content);

// Wczytanie zawartości pliku 2
const file2Content = fs.readFileSync(pathToFile2, "utf8");

// Wykonanie skryptu z pliku 2
eval(file2Content);

// Teraz możesz korzystać z zmiennych transformedDba i transformedDbv
// Połączenie baz danych na podstawie wartości authorID
const mergedData = {};
for (const key1 in transformedDba) {
  if (transformedDba.hasOwnProperty(key1)) {
    const authorID = transformedDba[key1].authorID;
    mergedData[authorID] = { ...transformedDba[key1] };
  }
}

for (const key2 in transformedDbv) {
  if (transformedDbv.hasOwnProperty(key2)) {
    const authorID = transformedDbv[key2].authorID;
    if (mergedData.hasOwnProperty(authorID)) {
      // Połączenie danych na podstawie authorID
      Object.assign(mergedData[authorID], transformedDbv[key2]);
    } else {
      mergedData[authorID] = { ...transformedDbv[key2] };
    }
  }
}

// Wynik do dodania do pliku wynikowego
const result = JSON.stringify(mergedData);

// Dodanie wyniku do pliku wynikowego
fs.appendFileSync(pathToOutputFile, result + "\n", "utf8");

console.log(
  "Skrypt został wykonany i wynik został dodany do pliku wynikowego."
);

module.exports = {
  data,
};
