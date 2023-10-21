// 20. FS - Module (sync)

const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// writing a file (create if there is no file, overwrite if there is one)
// writeFileSync(
//   "./content/result-sync.txt",
//   `Here is the result : ${first}, ${second}`
// );

// appending to the file
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");

// javascript reading the above code synchronously, line by line.
