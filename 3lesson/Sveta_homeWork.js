// задача №1
function GetSing(num) {   

    if (num === 0) {     // если число равняется нулю, то возвращаем результат zero
        return "zero"; }
        else if (num > 0) {    // если число больше нуля, то возвращаем результат positive
            return "positive";
        }
    else {                     // в противном случае возвращаем negative
        return "negative";}
    }

    console.log(GetSing(5));
    console.log(GetSing(-7));
    console.log(GetSing(0));


    //Задача №2

    function max(a, b) { 
        if (a > b) {  // если а>b возвращаем а
            return a;
        }
        else {return b};  // иначе возвращаем b
    };

    console.log(max(4, 9));
    console.log(max(4, -9));
    console.log(max(0, 1));

// Задача №3
function checkAge(age) {
    if (age < 18) {
        return "Access denied";
    }
    else if (age > 65) {
        return "Are you sure?";
    }
    else {
        return "Access granted";
    };
};

console.log(checkAge(5));
console.log(checkAge(18));
console.log(checkAge(35));
console.log(checkAge(65));
console.log(checkAge(67));  // 
console.log(checkAge(-1));  // надо ограничение поставить Age > 0