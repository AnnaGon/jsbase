// Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
//        содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
//        Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.

var object = [
    person1 = {
        name: prompt("enter name: "),
        sName: prompt("Enter a surname: "),
        age: prompt("Enter age: "),
        occupation: prompt("Enter occupation: "),
        show: function () {
            console.log("First name: " + this.name);
            console.log("Second name: " + this.sName);
            console.log("Age: " + this.age + " years old");
            console.log("Occupation: " + this.occupation);
        }
    },
    
    person2 = {
        name: prompt("enter name: "),
        sName: prompt("Enter a surname: "),
        age: prompt("Enter age: "),
        occupation: prompt("Enter occupation: "),
        show: function () {
            console.log("First name: " + this.name);
            console.log("Second name: " + this.sName);
            console.log("Age: " + this.age + " years old");
            console.log("Occupation: " + this.occupation);
        }
    }
]

for (var i = 0; i < object.length; i++) {
    object[i].show();
}

// Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.

function assignSalary(arr){
    for (var i = 0; i < arr.length; i++){
        switch (arr[i].occupation){
            case "director":
            arr[i].salary = 3000;
            break;
            case "manager": 
            arr[i].salary = 1500;
            break;
            case "programmer":
            arr[i].salary = 2000;
            break;
            default:
            arr[i].salary = 1000;
            
        } 
    }
}


assignSalary(object);

for (var i = 0; i < object.length; i++) {
    console.log("First name: " + object[i].name);
    console.log("Second name: " + object[i].sName);
    console.log("Age: " + object[i].age + " years old");
    console.log("Occupation: " + object[i].occupation);
    console.log("Salary: " + object[i].salary);
}