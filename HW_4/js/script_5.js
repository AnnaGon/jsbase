
// 5.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой:  

// var computerChoice = Math.random();
// alert(computerChoice);

// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново
// -->

var choice1Score = 1;
var choice2Score = 1;

function compChoice() {
    var choiceArr = ["rock", "paper", "scissors"]; 
    var random = choiceArr[Math.floor(Math.random() * 3)];
    return random;
}

function userChoice(){
    var userInput = prompt("Please enter your choice of either rock, paper or scissors. To exit, hit the 'Cancel' button.");
    return userInput.toLowerCase();
}


while (userChoice != "Cancel") {
    
    function scoring(choice1, choice2) {
        if (choice1 === choice2) {
            return "The result is a draw.";
        } if (choice1 === "rock") {
            if (choice1 === "scissors") {
                return "Rock wins. Your score is: " + choice1Score++;
            } else {
                return "Paper wins. The computer score is: " + choice2Score++;
            }
        } if (choice1 === "paper") {
            if (choice1 === "rock") {
                return "Paper wins. Your score is: " + choice1Score++;
            } else {
                return "Scissors win. The computer score is: " + choice2Score++;
            }
        } if (choice1 === "scissors") {
            if (choice1 === "paper") {
                return "Scissors win. Your score is: " + choice1Score++;
            } else {
                return "Rock wins. The computer score is: " + choice2Score++;
            }
        }
    }
    alert(scoring(userChoice(), compChoice()));
    
}



