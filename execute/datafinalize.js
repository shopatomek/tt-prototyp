const { combinedData } = require("../execute/data.js");
const { transformedDbvd } = require("../execute/dbvd.js");

console.log(combinedData);

// const datafinalize = {};

// // Check if combinedData is an array
// if (Array.isArray(combinedData)) {
//   // Iterate through objects in combinedData
//   combinedData.forEach((combinedDataItem) => {
//     // For each object in transformedDbv, retrieve authorId
//     const authorId = combinedDataItem.authorId;

//     // Find the corresponding dbvdItem based on authorId
//     const dbvdItem = transformedDbvd.find((dbvdItem) => dbvdItem[Id]);

//     if (dbvdItem) {
//       // If dbvdItem exists, update the datafinalize object
//       datafinalize[authorId] = {
//         ...datafinalize[authorId], // Merge with existing data if any
//         ...dbvdItem,
//       };
//     }
//   });
// }

// console.log(datafinalize);

// module.exports = { datafinalize };
