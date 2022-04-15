const capitalize1 = (str) => {
  let result = '';
  for (let i in str) {
    if (i === '0' || str[i - 1] === ' ') result = result + str[i].toUpperCase();
    else result = result + str[i];
  }
  return result;
};

const capitalize2 = (str) => {
  let list = str.split(' ');
  return list.map((item) => {
    if (item[0]) return item[0].toUpperCase() + item.slice(1);
    return item;
  }).join(" ");
};

console.log(capitalize2('hello gfgthis is ! shubham'));
