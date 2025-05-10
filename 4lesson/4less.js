
function evenNumbers (a, b)
 {
    let result = "";
    for (let i = a; i <= b; i++)
        console.log(i);
        if (i % 2 === 0) {
            result = result + i + " ";
        }
        

    return result;
 }



console.log(evenNumbers(1, 11));

