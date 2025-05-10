
function stringMirror(a) {
    const strLeng = a.length;
    let result = "";

    for (let i=strLeng - 1; i >= 0; i--) {
        result = result + a[i];
    }
    return result;
    }

console.log(stringMirror("hello"));

