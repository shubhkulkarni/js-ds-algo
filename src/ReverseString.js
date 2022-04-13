const reverse1 = str =>{
    let rev = "";
    let l = str.length;
    for(let i = 0;i < l;i++){
        rev = str[i] + rev;
    }
    return rev;
}

const reverse2 = str => str.split("").reverse().join("");

const reverse3 = str => {
    let rev = "" ;
    for(let char of str){
        rev = char + rev;
    }
    return rev;
}

const reverse4 = str => {
    return str.split("").reduce((a,b)=>b+a,"");
}

console.log(reverse4("fghfgh hello"))
