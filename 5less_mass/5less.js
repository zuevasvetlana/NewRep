//функция, которая принимает массив и возвращает сумму элементов массива

function SummArr(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let sumbol = myArray[i];
       AllArraysum = sumbol + myArray[i];
    }
    return AllArraysum;
}

const myArray = [1, 2, 3];
console.log(SummArr(myArray));



//функция, которая принимает массив и элемент, который проверяем на наличие в этом массиве и возвращает true или false

function mySerch(myArr, x){
    for (let i = 0; i < myArr.length; i++){
        if (myArr[i] === x){
        return true;}
    }  return false;
}

const myArr = [1, 2, 3, 4, 5];
console.log (mySerch(myArr, 0));


   