const { transformedDbv } = require("../execute/dbv.js");
const { transformedDba } = require("../execute/dba.js");

// console.log(transformedDbv);
// console.log(transformedDba);

// // Tworzymy pusty obiekt, który będzie zawierał połączone dane
// const combinedData = {};

// // Iterujemy przez obiekty w transformedDbv
// transformedDbv.forEach((dbvItem) => {
//   // Dla każdego obiektu transformedDbv, pobieramy authorId
//   const authorId = dbvItem.authorId;

//   // Szukamy odpowiadającego obiektu w transformedDba na podstawie authorId
//   const dbaItem = transformedDba.find((dbaItem) => dbaItem[authorId]);

//   // Jeśli znaleziono pasujący obiekt w transformedDba, to łączymy je
//   if (dbaItem) {
//     combinedData[authorId] = {
//       ...dbaItem[authorId],
//       ...dbvItem,
//     };
//   }
// });

// Wynik będzie zawierał połączone dane
// console.log(combinedData);
// // Ten kod stworzy obiekt combinedData, który będzie zawierał połączone dane z obiektów transformedDba i transformedDbv na podstawie wartości atrybutu authorId.

// // Ścieżka do pliku, w którym zostanie dodany wynik

// // // Dodanie wyniku do pliku wynikowego

// // fs.appendFileSync(pathToOutputFile, result + "\n", "utf8");

// // console.log(
// //   "Skrypt został wykonany i wynik został dodany do pliku wynikowego."
// // );

// module.exports = {
//   combinedData,
// };

const newdb = {};
transformedDbv.forEach((dbvItem) => {
  for (const key in dbvItem) {
    if (dbvItem.hasOwnProperty(key)) {
      const authorId = dbvItem[key].authorId;
      transformedDba.forEach((dbaItem) => {
        if (dbaItem[authorId]) {
          if (!newdb[key]) {
            newdb[key] = {};
          }
          newdb[key] = {
            ...dbvItem[key],
            ...dbaItem[authorId],
          };
        }
      });
    }
  }
});

console.log(newdb);
