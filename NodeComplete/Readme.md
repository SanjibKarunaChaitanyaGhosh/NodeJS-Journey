# Step 1 – Create a project folder
```bash
mkdir nodejs-chapter-1
cd nodejs-chapter-1
```
# Step 2 – Create the JavaScript file
* Create a file named:server.js

# Step 3 – Create the file
* non-blocking.js

# Step 4 
```bash
console.log("Start");

setTimeout(() => {
  console.log("Database/API work completed");
}, 2000);

console.log("End");
```
# Step 5
```bash
node non-blocking.js
```