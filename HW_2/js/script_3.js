// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.


var a = prompt("First number: ");
document.write(a + '<br>');

var b = prompt("Second number: ");
document.write(b + '<br>');

var c = prompt("Third number: ");
document.write(c + '<br>');

var array = [a, b, c];
var largest = Math.max.apply(Math, array);
document.write("Largest number is: " + largest)

