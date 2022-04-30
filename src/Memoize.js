const memoize = (fn) => {
  let cache = {};
  
  return function (...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    console.log(cache)
    return result;
  };
};

const add = (a,b) => {
  return a+b
}

const fastAdd = memoize(add);

console.log(fastAdd(1,2))
console.log(fastAdd(2,2))
console.log(fastAdd(2,3))
