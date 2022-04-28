const countVowels = (str) => {
  let vowels = 'aeiou';
  let count = 0;
  for (let i of str.toLowerCase()) {
    if (vowels.includes(i)) count++;
  }
  return count;
};

const countVowels2 = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

console.log(countVowels2('hello this is sample string'));
