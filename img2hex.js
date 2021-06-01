// ? Encode and Decode an image using JavaScript and Blockchain mentality

// 1. Get access to file system
// 2. Read the image file
// 3. Encode image as hex
// 4. Send the encoded Data to console

// Require file system access
// https://www.npmjs.com/package/file-system
// * This module make file opertaion apis simple, you don't need to care the dir exits. and the api is same as node's filesystem. This is no exists time cost for this plugin.
fs = require("fs");

// Read file buffer
imgReadBuffer = fs.readFileSync("test-pattern.jpg");

// Encode image buffer to hex
imgHexEncode = new Buffer.from(imgReadBuffer).toString("hex");

// Output encoded data to console
console.log(imgHexEncode);

// * End Encoding >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Decode hex
let imgHexDecode = new Buffer.from(imgHexEncode, "hex");

// Save decoded file file system
fs.writeFileSync("decodedHexImage.jpg", imgHexDecode);

// * End Decoding >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
