function checkNum(num) {
  let numData = [];
  for (i = 1; i <= num; i++) {

    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      numData.push("yu-gi-oh");
    } else if (i % 2 === 0 && i % 3 === 0) {
      numData.push("yu-gi");
    } else if (i % 2 === 0 && i % 5 === 0) {
      numData.push("yu-oh");
    } else if (i % 3 === 0 && i % 5 === 0) {
      numData.push("gi-oh");
    } else if (i % 2 === 0) {
      numData.push("yu");
    } else if (i % 3 === 0) {
      numData.push("gi");
    } else if (i % 5 === 0) {
      numData.push("oh");
    } else {
      numData.push(i);
    }
  }
  console.log(numData);
    return numData;
}
checkNum(100);
checkNum(55);
