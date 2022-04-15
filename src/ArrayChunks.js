const getChunks1 = (list, size) => {
  if (size >= list.length) return [list];
  let arr = [];
  for (let i in list) {
    if (arr.length === 0) arr[0] = [list[i]];
    else if (arr[arr.length - 1].length < size)
      arr[arr.length - 1].push(list[i]);
    else arr[arr.length] = [list[i]];
  }
  return arr;
};

const getChunks2 = (list, size) => {
  let chunked = [];

  for (let item of list) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }
  return chunked;
};

const getChunks3 = (list,size) => {
  const chunked = [];
  let index = 0;
  while(index < list.length){
    chunked.push(list.slice(index,index+size));
    index = index+size;
   
  }
  return chunked;
}

const arr = [1, 2, 3,5,9,10,11];

console.log(getChunks3(arr, 2));
