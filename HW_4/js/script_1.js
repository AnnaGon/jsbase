// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.


function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

var a = 0;
var i = false;

do {
    var a = +prompt("Введите первую цифру");
    if (isNaN(a)) {
        console.log("Вы ввели не цифру. Невозможнотвыполнить операцию.");
    } else if (a) {
        i = true;
        console.log(a);
    }
}
while (i == false);

var b = 0;
var i = false;

do {
    var b = +prompt("Введите вторую цифру");
    if (isNaN(b)) {
        console.log(" Вы ввели не цифру. Невозможнотвыполнить операцию.");
    } else if (b) {
        i = true;
        console.log(b);
    }
}
while (i == false);

var sign = prompt("Enter \"sign\" \n (+ - * /)");
var result;

function calculate(a, b, sign) {
    
    switch (sign) {
        case "+":
        result = add(a, b);
        break;
        case "-":
        result = min(a, b);
        break;
        case "/":
        result = div(a, b);
        break;
        case "*":
        result = mul(a, b);
        break;
        default:
        if (result != undefined) {
            break;
            
        } else alert(sign + " = not an arithmetic sign, try again");
        console.log("sign is not a sign. You have entered: " + sign);
    }
    return result;
}

console.log("your result is: " + calculate(a, b, sign));
document.write("your result is: " + calculate(a, b, sign));