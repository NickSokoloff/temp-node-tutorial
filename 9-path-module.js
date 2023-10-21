// 19. PATH - Module

const path = require("path");

console.log(path.sep);

// shows the normalized path to the test.txt file
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// shows the name ot the test.txt file
const base = path.basename(filePath);
console.log(base);

// retruns an absolute path to the test.txt
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
