process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const H = lines[0].split(" ")[0];
  const W = lines[0].split(" ")[1];
  // console.log(H);
  // console.log(W);
  // console.log(lines[1]);
  let count = 0;
  for (let i = 1; i <= H; i++) {
    let upLine = lines[i - 1];
    let line = lines[i];
    let downLine = "." * W;
    if (i !== H) {
      downLine = lines[i + 1];
    }
    for (let j = 0; j < W; j++) {

      if (line[j] === "#") {
        count += 4;
        if (i !== 1) {
          if (upLine[j] === "#") {
            count -= 1;
          }
        }
        // if (i !== H) {
        //   if (downLine[j] === "#") {
        //     count -= 1;
        //   }
        // }
        if (j !== 0) {
          if (line[j - 1] === "#") {
            count -= 1;
          }
        }
        if (j !== W - 1) {
          if (line[j + 1] === "#") {
            count -= 1;
          }
        }
      }
    }
  }
  console.log(count);
});
