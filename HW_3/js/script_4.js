// 4. Создать два произвольных массива: 
//         один массив - любимая спортивная команда / модели автомобилей / города, 
//         во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
//     Из двух массивов сделайте ассоциативный массив.
//     Массив, который будет выступать в качестве ключа - должен содержать уникальные значения



var cars = new Array("Audi", "BMW", "VW");
console.log("Array with cars: " + cars);

var model = new Array("Q5", "X5", "passat B8");
console.log("Array with models: " + model);


var associative_array = new Array();

for(var i=0; i < cars.length; i++){
    associative_array[cars[i]]=model[i];
}

console.log(associative_array);