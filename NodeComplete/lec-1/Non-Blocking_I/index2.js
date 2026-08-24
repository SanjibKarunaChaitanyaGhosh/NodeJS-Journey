console.log("1...Request received");

setTimeout(() => {
  console.log("2...User data received from database");
}, 2000);

console.log("3...Prepare response...");
console.log("4...Handle another request...");
console.log("6...Handle another request...");
console.log("7...Handle another request...");
console.log("8...Handle another request...");
setTimeout(() => {
  console.log("9...User data received from database");
}, 2000);
console.log("10...Handle another request...");
console.log("11...Handle another request...");
console.log("12...Handle another request...");