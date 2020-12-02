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

  for (let i = 1; i <= N; i++) {
    const word = lines[i].split("");
    const end = word.length - 1;
    if (
      word[end] === "s" ||
      (word[end - 1] === "s" && word[end] === "h") ||
      (word[end - 1] === "c" && word[end] === "h") ||
      word[end] === "o" ||
      word[end] === "x"
    ) {
      const answer = word.reduce((acc, char) => acc + char, "") + "es";
      console.log(answer);
    } else if (word[end] === "f") {
      const answer =
        word.slice(0, end).reduce((acc, char) => acc + char, "") + "ves";
      console.log(answer);
    } else if (word[end - 1] === "f" && word[end] === "e") {
      const answer =
        word.slice(0, end - 1).reduce((acc, char) => acc + char, "") + "ves";
      console.log(answer);
    } else if (
      word[end - 1] !== "a" &&
      word[end - 1] !== "i" &&
      word[end - 1] !== "u" &&
      word[end - 1] !== "e" &&
      word[end - 1] !== "o" &&
      word[end] === "y"
    ) {
      const answer =
        word.slice(0, end).reduce((acc, char) => acc + char, "") + "ies";
      console.log(answer);
    } else {
      const answer = word.reduce((acc, char) => acc + char, "") + "s";
      console.log(answer);
    }
  }
});
