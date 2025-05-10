//Задача №1
function digitCount(n) {
    const str = n.toString();
   return  str.length;

}

console.log(digitCount(12345)); // 5
console.log(digitCount(7)); // 1
console.log(digitCount(987654321)); // 9

//Задача №2
function reverseNumber(a){
    //const str = a.toString();
    let str = a.toString();
    let strRev = '';
     for (let i = 0; i < str.length; i++) {
        let sumbol = str[i];
        strRev = sumbol + strRev;
        
    }
    let strRev1 = Number(strRev);
    return strRev1;
}

console.log(reverseNumber(12340)); // 4321
console.log(reverseNumber(987.6)); // 6.789
console.log(reverseNumber(1000)); // 1



//Задача №3

function factorial(x){
    
        let j=1;
        for (let b=2; b<=x; b++){
        j=j*b;
    }
    return j;
}
console.log(factorial(5)); // 120 
console.log(factorial(7)); // 504
console.log(factorial(1));
console.log(factorial(0)); //1