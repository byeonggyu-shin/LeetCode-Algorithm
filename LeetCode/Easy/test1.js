const bubbleSort = function (arr) {
  // TODO: 여기에 코드를 작성합니다.

  // 첫 번째 요소가 두 번째 요소보다 크면, 두 요소의 위치를 바꿉니다. (swap)
  let num = 0;
  while (num < arr.length - 1) {
    let tail = arr[arr.length - 1]

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let arrEl = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = arrEl;
      }
    }
    if (arr[arr.length - 1] === tail) {
      return arr
    }
    num++
  }

  return arr
};

debugger;
console.log(bubbleSort([20, -10, -11, 2, 4, 299]))

