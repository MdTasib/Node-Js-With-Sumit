const path = require("path");
const os = require("os");
const fs = require("fs");
const EventEmitter = require("events");

const pathName = "F:/Node-Js-With-Sumit/Lesson-5-CoreModules/index.js";

// path
console.log(path.parse(pathName), "path - parse");

// os
console.log(os.platform(), "os - platform");
console.log(os.cpus(), "os - cpus");
console.log(os.freemem(), "os - freemem");
console.log(os.homedir(), "os - homedir");

// fs - file system
// readFile is asynchronous way work and readFileSync is synchronous way work

// fs.readFile("hello.txt", "Hello world", (error, data) => {
// 	console.log(data);
// });

// events
const emitter = new EventEmitter();

emitter.on("bell", () => {
	console.log("Need to run");
});

emitter.emit("bell");

// event with perametors
const emitter2 = new EventEmitter();

emitter2.on("bell2", period => console.log(`Need to run because ${period}`));
emitter2.emit("bell2", "second period is ended");
