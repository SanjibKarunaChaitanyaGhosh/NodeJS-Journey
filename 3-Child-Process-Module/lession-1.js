const cp = require("child_process");

// Process-1
const result = cp.execSync("ls");

console.log(result.toString());
// Process-2
console.log(cp.execSync("pwd").toString());

// Process-3 
// console.log(cp.execSync("calc").toString); for windows

// Process-4
// calculator open two times
cp.execSync("gnome-calculator");
console.log(cp.execSync("gnome-calculator").toString());

// Process-5
// cp.execSync("start chrome https://www.aictech.co.in/"); For windows

// Process-6
cp.execSync("xdg-open https://www.aictech.co.in/")

// Process-7
cp.execSync("google-chrome https://www.aictech.co.in/");

// Process-8

console.log(
    cp.execSync(
        "node 3-Child-Process-Module/index.js"
    ).toString()
);

// console.log(
//     cp.execSync(
//         "node ./2-Introduction-Module-System/lesson-2.js"
//     ).toString()
// );

const process1 = cp.spawn("node", ["3-Child-Process-Module/index.js"], {
    stdio: "inherit"
});