const fs = require('fs')

// Reading a file

let fileContent = fs.readFileSync('random1.txt')

console.log(fileContent);

console.log('the required content of the file is ---->> '+fileContent);

console.log(fileContent.toString());

// Writing within file

// if exist overwrite that, if not exist then it will crate a file also

let fileCreate = fs.writeFileSync('random2.txt', "This is file has been created")

let fileWrite = fs.writeFileSync('random.txt', "This is file-2")

// append or update data within file

let fileAppend = fs.appendFileSync('random.txt',"This is file-Append")

//Delete a file

let filDelete = fs.unlinkSync('random2.txt')