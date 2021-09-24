const doTask = new Promise((resolve, reject) => {
  myNums = [];
  for (let i = 0; i < 10; i++) {
    myNums.push(Math.floor(Math.random() * (6 - 1)) + 1);

    if (myNums[i] === 6) {
      return myNums;
    } else {
    }
  }
  resolve(myNums);
});

doTask.then(console.log);
console.log("hola");
