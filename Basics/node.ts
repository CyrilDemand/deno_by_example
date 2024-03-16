import os from "node:os";

console.log("Current architecture is:", os.arch());
console.log("Home directory is:", os.homedir());

import { emojify } from "npm:node-emoji@2";

console.log(emojify(":t-rex: :heart: NPM"));

