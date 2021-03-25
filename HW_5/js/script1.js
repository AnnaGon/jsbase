// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.

var a = prompt("Enter number for x: " );
var b = prompt("Enter number for y: ");

if(isNaN(a) || isNaN(b)){
    console.log("a or b  is not a number! Please enter a number");
}


var point = {
    x: a,
    y: b
};
console.log(point);

function GetQuadrant(x, y){
var result = (point.x > 0 && point.y > 0)? "I quadrant" : (point.x < 0 && point.y > 0)? "II quadrant" : (point.x < 0 && point.y <  0) ? "III quadrant" : (point.x > 0 && point.y < 0) ? "IV quadrant" : (point.x == 0  && point.y == 0) ? "Zero point" : "Error in numbers entered. Please retry again."

return result;
}

console.log(GetQuadrant());
