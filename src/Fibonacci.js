//iterative solution 1

const fibonacci1 = (n) => {
  let sum;
  let n1 = 0;
  let n2 = 1;
  let result = [n1, n2];
  for (let i = 0; i <= n; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    result.push(sum);
  }
  return result;
};

//iterative solution 2

const fibonacci2 = (n) => {
  let result = [0, 1];
  let a, b;
  for (let i = 2; i <= n; i++) {
    a = result[i - 1];
    b = result[i - 2];
    result.push(a + b);
  }
  return result;
};

//recursive solution : return nth fibonacci number

const fibonacci3 = (n) => {
  if (n < 2) return n;
  return fibonacci3(n - 1) + fibonacci3(n - 2);
};

console.log(fibonacci3(5));
