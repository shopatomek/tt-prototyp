const { transformedDbv } = require("../execute/dbv.js");
const { transformedDba } = require("../execute/dba.js");

// console.log(transformedDbv);
// console.log(transformedDba);

// // fs.appendFileSync(pathToOutputFile, result + "\n", "utf8");

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

module.exports = {
  newdb,
};

// Tworzymy pusty obiekt newdb.
// Dla każdego elementu dbvItem w tablicy transformedDbv: a. Iterujemy przez każdy klucz w obiekcie dbvItem. b. Sprawdzamy, czy dbvItem zawiera dany klucz za pomocą metody hasOwnProperty. c. Pobieramy authorId z obiektu dbvItem. d. Dla każdego elementu dbaItem w tablicy transformedDba: i. Sprawdzamy, czy dbaItem zawiera authorId. ii. Jeśli authorId istnieje w dbaItem, przechodzimy do kolejnego kroku. iii. Sprawdzamy, czy newdb nie ma jeszcze danego klucza. iv. Jeśli klucz nie istnieje w newdb, tworzymy pusty obiekt pod tym kluczem. v. Ustawiamy wartość newdb[key] na połączony obiekt dbvItem[key] i dbaItem[authorId].
// Obiekt newdb będzie zawierał połączone informacje z transformedDbv i transformedDba.
// Uwaga: Ten kod zakłada, że zarówno transformedDbv, jak i transformedDba są tablicami obiektów.
