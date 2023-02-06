const numGen = () => {
  let arr = [];
  
  while (arr.length < 6) {
    let num = Math.floor(Math.random() * (45 - 1) + 1);
    arr.push(num);
    for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] === num) {
        arr.pop();
        break;
      }
    }
  }

  return arr;
};
console.log(numGen());
