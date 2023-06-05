function solution(numbers) {
  let answer = new Set();
  permutation("", numbers.split("")).forEach((number) => {
    for (let i = 1; i <= number.length; i++) {
      const num = Number(number.substring(0, i));
      if (isPrime(num)) answer.add(num);
    }
  });
  return answer.size;
}

function permutation(str, arr) {
  const result = [str];
  if (!arr.length) return result;
  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr];
    const picked = rest.splice(i, 1);
    const next = str + picked;
    result.push(...permutation(next, rest));
  }
  return result;
}

function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
