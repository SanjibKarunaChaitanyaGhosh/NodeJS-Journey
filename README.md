# NodeJS-Journey

## Chapter-1 git issues 
* git remote -v

```bash
git remote set-url origin https://github.com/SanjibKarunaChaitanyaGhosh/NodeJS-Journey.git
 ```

 * gh auth status

 ## if Command 'gh' not found, but can be installed with:
 ```bash
sudo snap install gh  # version 2.86.0-112-gc30647b78, or
sudo apt  install gh  # version 2.45.0-1ubuntu0.3
See 'snap info gh'  # for additional versions.
```

### If gh isn't installed, you can check: 
```bash
git config --global user.name
git config --global user.email 
```

### If you have GitHub CLI installed:
```bash
gh auth logout
``
* then
```bash
gh auth login
```

## Chapter-2 Modules
* https://nodejs.org/docs/latest/api/

* Child Process is a node module used to create sub process within a script
* we can perform different task with our script by just using some methods


## 1. Import the child_process module
```bash
const cp = require("child_process")

cp.execSync()
```

## 2. What is child_process?
* child_process is a built-in Node.js module, so you don't need to install anything with npm.
* Normally, your Node.js program itself executes JavaScript:
```bash
console.log("Hello");
```

* With the child_process module, Node.js can ask the operating system to run another process/command.

* For example, Node.js can execute:

```bash 
ls or mkdir test or python app.py
```
```bash

* Your Node.js Program
*        |
*        | child_process
*        ↓
* Operating System
*        |
*        ↓
* Another Process / Command
``` 

## 3. execSync()

* execSync() executes a shell command synchronously.
```bash
const cp = require("child_process");

cp.execSync("ls");
```


* This tells Node:

* "Run the ls command and wait until it finishes."

### You can also store the output:

```bash
const cp = require("child_process");

const output = cp.execSync("ls");

console.log(output.toString());
```

## One important point

* execSync() is synchronous, meaning Node.js waits for the command to finish.

```bash
console.log("A");

cp.execSync("sleep 3");

console.log("B");
```

## Output
```bash
A
(wait 3 seconds)
B
```
* So for your lesson, remember:
```bash
Method	Behavior
execSync()	Synchronous — waits
exec()	Asynchronous
spawn()	Good for long-running child processes
```
### Process-5
*  For windows
```bash
cp.execSync("start chrome https://www.aictech.co.in/");
```

### Process-6
```bash
cp.execSync("xdg-open https://www.aictech.co.in/")
```

### Process-7
```bash
cp.execSync("google-chrome https://www.aictech.co.in/")
```

## Comparision
```bash
| Task              | Windows            | Linux/Ubuntu         |
| ----------------- | ------------------ | -------------------- |
| List files        | `dir`              | `ls`                 |
| Current directory | `cd` / `echo %cd%` | `pwd`                |
| Calculator        | `calc`             | `gnome-calculator`   |
| Open URL          | `start URL`        | `xdg-open URL`       |
| Open Chrome       | `start chrome URL` | `google-chrome URL`* |
```

## Chapter-3 Modules
















## Chapter-4 Modules
## Chapter-5 Modules
## Chapter-6 Modules
## Chapter-7 Modules
## Chapter-8 Modules