const getCharMap = str => {
  const map = {};
  for(let char of str){
    // if(char in map){
    //   map[char] = ++map[char];
    // }else{
    //   map[char] = 1;
    // }
    map[char] = map[char] + 1 || 1 ;
  }
  return map;
}

//anagram 
const areAnagrams = (str1,str2) => {
  const map1 = getCharMap(str1);
  const map2 = getCharMap(str2);
  if(Object.keys(map1).length !== Object.keys(map2).length){
    return false;
  }
  for(let key in map1){
    if(map1[key] !== map2[key]) return false;
  }

  return true;

}

console.log(areAnagrams("fabc","cbaf"))

//most common char , most repeated char etc.
const getMaxCountChar = str => {
  const map = getCharMap(str);
  let max = 0;
  let maxChar = "";
  for(let key in map){
    if(map[key] > max){
      max = map[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(getMaxCountChar("Shubhammm"))
