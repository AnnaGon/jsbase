// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность

function pow(a, n) {
    var result = a;
    
    for (var i = 1; i < n; i++) {
        result *= a;
    }
    
    return result;
}

var a = 0;
i = false;

do {
    var a = +prompt("Enter a number");
    if (isNaN(a)) {
        console.log("Please enter a number!");
    } else if (a) {
        i = true;
        console.log("Number for function: " + a);
    }
}
while (i == false);

var n = 0;
i = false;

do{
    var n = prompt("Enter a power (n)");
    if (isNaN(n)){
        console.log("Please enter a number for 'n'!");
    } else if (n) {
        i = true;
        console.log( a + "n. Where 'n' is: " + n );
    }
    if (n < 1) {
        alert("The power is not supported, use a single number");
    } else {
        console.log( pow(a, n) );
    }
}
while (i == false);
