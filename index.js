const express = require('express');
const app = express();
const port = 3000;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17, 21, 34, 55, 89, 144];
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const isEven = (num) => num % 2 === 0;
const isFibonacci = (num) => {
  const isPerfectSquare = (x) => Number.isInteger(Math.sqrt(x));
  return (
    isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
  );
};
const getRandomNumbers = (arr, count = 5) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
app.get('/evaluation-service/prime', (req, res) => {
  const primes = numbers.filter(isPrime);
  res.json({ numbers: primes });
});
app.get('/evaluation-service/even', (req, res) => {
  const evens = numbers.filter(isEven);
  res.json({ numbers: evens });
});
app.get('/evaluation-service/fibo', (req, res) => {
  const fibos = numbers.filter(isFibonacci);
  res.json({ numbers: fibos });
});
app.get('/evaluation-service/random', (req, res) => {
  const randoms = getRandomNumbers(numbers, 5); 
  res.json({ numbers: randoms });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
