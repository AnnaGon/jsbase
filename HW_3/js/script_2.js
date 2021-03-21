// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
//     Описание:
//     п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
//     п.2 Запросите у пользователя название элемента массива
//     п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
//     п.3.2 Если в массиве такого элемента нет - добавить в конец массива
//     п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
//     п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива (в зависимости от условий выше)



var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"]; 
console.log ("The list: " + cars);

var length = cars.length;

var input = prompt("After what car you whant to add a new: \n Already exist: \n" + cars.join("\n"));

for (var i = 0; i <= cars.length; i++){
    if ( cars[i] == input ){
        newcar = prompt("Please enter a new car to add: ");
        cars.splice(i+1, 0, newcar);
        console.log("After splice. New car list looks now: " + cars);
        break;
        
    } else if ( i == cars.length) {
        cars.push(input);
        console.log("After push. New car list looks now: " + cars);
        break;
    }
    
}
