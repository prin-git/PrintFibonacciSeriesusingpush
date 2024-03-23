function Fibonacci(n) {
  var f = [];
  for (var i = 0; i < n; ++i) {
    f.push(i < 2 ? i : f[i - 1] + f[i - 2]);
  }
  return f;
}

console.log(Fibonacci(10));
