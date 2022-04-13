const isPalindrome1 = str =>{
  let rev = str.toLoweCase().split("").reverse().join("");
  return rev === str.toLoweCase();
} 

const isPalindrome2 = str => {
    str = str.toLowerCase();
    return str.split("").every((char,i)=>{
      return char === str[(str.length-1)-i]
    })
}

console.log(isPalindrome2("madam"));
