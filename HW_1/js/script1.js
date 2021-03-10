var x1 = prompt ("введите значение х1: ");
console.log("x1 = " + x1);

var x2 = prompt ("введите значение х2: ");
console.log("x2 = " + x2);

var y1 = prompt ("введите значение y1: ");
console.log("y1 = " + y1);

var y2 = prompt ("введите значение y2: ");
console.log("y2 = " + y2);

var k = (y1 - y2) / (x1 - x2);
console.log("k = (y1 - y2) / (x1 - x2). значение k = " + k);

var b = y2 - (k * x2);
console.log("b = y2 - k*x2. значение b = " + b);

var y = (k * x2) + b;
console.log("y = kx2 + b. значение y = " + y);
