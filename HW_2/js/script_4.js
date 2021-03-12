// 4. Дано два числа A и B где (A < B).
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В 
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   

var a = 4;
console.log("first muber: " + a);

var b = 10;
console.log("Second muber: " + b);

var sum = 0;

while (a<b){
    a++;

    if (a<b){
        console.log(a);
        sum +=a;
    }   
    if (a%2!=0){
        document.write(a + '<br>');
    }        
}


document.write("Summ of all numbers between A& B : " + sum);
console.log("Summ of all numbers between A& B : " + sum);
