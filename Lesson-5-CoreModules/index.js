const path = require("path");
const os = require("os");

const pathName = "F:/Node-Js-With-Sumit/Lesson-5-CoreModules/index.js";

console.log(path.parse(pathName), "path - parse");
console.log(os.platform(), "os - platform");
