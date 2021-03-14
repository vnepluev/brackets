module.exports = function check(str, bracketsConfig) {
    let arrayLength = bracketsConfig.length; // сколько всего разделителей
    let str1 = str.split('');                // каждый символ -> в элемент массива
    let isContinue = true;                   // продолжать или нет

    for (let i = 0; i < arrayLength; i++) {
        isContinue = true;
        // получаем разделители
        let bracketA = bracketsConfig[i][0]; // открывающая скобка
        let bracketB = bracketsConfig[i][1]; // закрывающая скобка
        
        while (isContinue) {
            let a = str1.indexOf(bracketA);       // индекс элемента либо -1
            let b = str1.indexOf(bracketB);
            
            if (b > a) {
                //парный тег найден, удаляем из массива
                str1.splice(a, 1);
                str1.splice(b - 1, 1);
            } else {
                isContinue = false;
            }
        }
    }

    if (str1.length > 0) {
        return false;
    } else {
        return true;
    }

}
