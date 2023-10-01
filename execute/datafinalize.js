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

module.exports = {
  mergedData,
};
