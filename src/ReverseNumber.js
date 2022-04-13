const reverse1 = num => {
  let rev = 0;
  while (num != 0) {
    rev = (rev*10) + (num % 10);
    num = Math.trunc(num/10) ; 
  }
  return rev;
}

const reverse2 = num => num.toString().split("").reverse().join("");



console.log(reverse1(-1234567)) 


