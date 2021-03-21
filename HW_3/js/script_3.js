// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
// Размер каждого вложенного массива - 3.


var array = +prompt("Please enter an array size (lines): " );
var array = new Array(array);

for (var i = 0; i < array.length; i++) {
    array[i] = new Array(3);
    
    for (var j = 0; j < array[i].length; j++) {
        if (i % 2 !== 0 ){
            array[i][j] = ("even");
            // console.log(array[i][j]);
            
        } else {
            array[i][j] = ("odd");
            // console.log(array[i][j]);
        }   
    }
}

console.log(array);
