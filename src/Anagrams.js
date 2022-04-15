const getCharMap = (str) => {
  str = str.replace(/[^\w]/g, '').toLowerCase();
  const map = {};
  for (let char of str) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
};

const areAnagrams1 = (str1, str2) => {
  const map1 = getCharMap(str1);
  const map2 = getCharMap(str2);
  const lens = Object.keys(map1).length === Object.keys(map2).length;
  if (!lens) return false;
  for (let key in map1) {
    if (map1[key] !== map2[key]) return false;
  }
  return true;
};

const areAnagrams2 = (str1, str2) => {
  str1 = str1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  str2 = str2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  return str1 === str2;
};

console.log(areAnagrams2('hello', 'lleho'));
