// 2. Построить прямоугольный треугольник состоящий из символа "*".


var lines = prompt("Enter number of lines: ");
// var str = ' ';
// var star = " * ";

// for(var i = 0; i < lines; i++){
//     str += star;
//     console.log(str);
// }

for (var i = 0; i < lines; i++) {
    for (var j = 0; j < i; j++) {
        document.write(" * ");

    }
    document.write("<br/>");
}