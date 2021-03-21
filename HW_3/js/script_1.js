// 1. Сделать собственные примеры методов применяемых для массивов.
// Метод Join()
var planets = ["earth", "mars", "venus"];
document.write(planets);
console.log("Before join: " );
console.log(planets);

var changeplanets = planets.join(", ");
console.log("After join: " + changeplanets);


var newArr = changeplanets.split(" ");
console.log("After split");
console.log(newArr);
console.log("***************")

// Метод concat()
var cars = ["Audi", "Ford", "Fiat"];
var country = ["Germany", "USA", "Italy"];

var description = cars.concat(country);
console.log("Cars add")
console.log(description);

country = country.concat("Ukraine", "Japan");
console.log("Country add Ukraine, Japan : ");
console.log(country);
console.log("***************")

// Метод reverse()
var arr = [10, 20, 35, 400]
console.log("Before reverse: " + arr);
console.log("first number before reverse: " + arr[0]);

arr = arr.reverse();

console.log("After reverse:" + arr);
console.log("first number after reverse: " + arr[0]);
console.log("***************")

// Метод slice()
var cars = ["audi", "bmw", "mercedes", "zaz"];
console.log(cars);

var piece = cars.slice(0, 3);
console.log("Cars after slice (0,3) - " + piece);

piece = cars.slice(2);
console.log("Slice (2) - " + piece);

piece = cars.slice(1, -1);
console.log("Slice (1, -1) - " + piece);
console.log("***************")


// Метод sort()
var numbers = [3, 7, 14, 2, 9, 95, 5, 1, 111];
console.log(numbers + " Before sort");

numbers.sort(function (a, b) { return a-b; });
console.log(numbers + " Numbers after sort");
console.log("***************")

var letters = ["Anna", "Alice", "Abdul", "John"];
console.log("Before sort: " + letters);

letters.sort();
console.log("After sort: " + letters);
console.log("***************")


// Метод push()
var technics = ["Dell", "Apple", "Lenovo"];
console.log("Full list of technics before changes: " + technics);

console.log("Length before changes: " + technics.length);

var newList = technics.push("ASUS", "Sony");
console.log("After addited items : " + technics);
console.log("New lenght of the list: " + newList);
console.log("***************")

// Метод pop() 
var books = ["'The Great Gatsby'", "'Anna Karenina'", "'The Scarlet letter'"];
console.log("Books before changes: " + books);
console.log("Length before changes: " + books.length);

var deleteBooks = books.pop();
console.log("List of the books after changes: " + books);
console.log("Length after changes: " + books.length);
console.log("Deleted book: " + deleteBooks);
console.log("***************")

// Метод unshift()
var books = ["'The Great Gatsby'", "'Anna Karenina'", "'The Scarlet letter'"];
console.log("Books before changes: " + books);

var newListBooks = books.unshift("'Alice in wonderland'");
console.log("List of the books after changes: " + books);
console.log("Length after changes: " + books.length);
console.log("***************")

// Метод shift()
var brands = ["Sumsung", "LG", "Sony", "Apple"];
console.log("Before changes: " + brands);

var deleteBrand = brands.shift();
console.log("After chnages: " + brands);
console.log("Deleted brand: " + deleteBrand);