process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
function over60(time) {
  if (time.m >= 60) {
    time.h += 1;
    time.m -= 60;
  }
}
function under0(time) {
  if (time.m < 0) {
    time.h -= 1;
    time.m += 60;
  }
}

reader.on("line", (line) => {
  lines.push(line);
});
reader.on("close", () => {
  const times = lines[0].split(" ");
  const a = Number(times[0]);
  const b = Number(times[1]);
  const c = Number(times[2]);
  const N = Number(lines[1]);
  const answer = {
    h: "00",
    m: "00",
  };
  for (let i = 2; i <= N + 1; i++) {
    const trainTimes = lines[i].split(" ");
    const arraivalTime = {
      h: Number(trainTimes[0]),
      m: Number(trainTimes[1]) + b + c,
    };
    over60(arraivalTime);

    if (arraivalTime.h < 9 && arraivalTime.m < 60) {
      const departureTime = {
        h: Number(trainTimes[0]),
        m: Number(trainTimes[1]) - a,
      };
      under0(departureTime);
      answer.h = "0" + String(departureTime.h);
      answer.m =
        departureTime.m < 10
          ? "0" + String(departureTime.m)
          : String(departureTime.m);
    }
  }
  console.log(answer.h + ":" + answer.m);
});
