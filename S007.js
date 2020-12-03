const { start } = require('repl');

process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
const product = [];
let startIndex = -1;
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function pushNumber(S,endIndex) {
  product.push(Number(S.slice(startIndex,endIndex)));
}

function returnProduct() {
  return product.reduce((acc, num) => acc = acc * num, 1);
}

reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  const S = lines[0];
  const alphabetSet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const numberSet = ['0','1','2','3','4','5','6','7','8','9'];
  const countSet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  let numberBool = false;
  for(let i = 0; i < S.length; i++) {
    const nowString = S[i];
    
    if(numberSet.includes(nowString)) {
      if(!numberBool) {
        numberBool = true;
        startIndex = i;
      }
    } else if(alphabetSet.includes(nowString)) {
      let popBool = false;
      if(numberBool) {
        pushNumber(S,i);
        numberBool = false;
        popBool = true;
      }
      const alphabetIndex = alphabetSet.indexOf(nowString);
      countSet[alphabetIndex] += returnProduct();
      if(popBool) {
        product.pop();
      }
    } else if(nowString === "(") {
      pushNumber(S,i);
      numberBool = false;
    } else {
      product.pop();
    }
  }
  for(let i = 0; i < 26; i++) {
    console.log(alphabetSet[i] + " " + countSet[i]);
  }
});