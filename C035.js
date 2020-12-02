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
  const N = Number(lines[0]);
  let pass = 0;
  for(let i = 1; i <= N; i++) {
    const score = lines[i].split(" ");
    const total = score.slice(1).reduce((acc ,rec) => acc + Number(rec) , 0);
    if(total >= 350) {
      if(score[0] === "l") {
        if (Number(score[4]) + Number(score[5]) >= 160) {
          pass += 1;
        }
      } else {
        if (Number(score[2]) + Number(score[3]) >= 160) {
          pass += 1;
        }
      }
    }
  }
  console.log(pass);
});
