/* Функция вычисляет числа Фибоначчи.
Аргументом является порядковый номер числа.
https://en.wikipedia.org/wiki/Fibonacci_sequence
*/

const fib = (n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

export default fib;
