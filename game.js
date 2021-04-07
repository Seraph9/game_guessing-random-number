const readline = require('readline');


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

let secretNumber = getRandomIntInclusive(0, 100);
//console.log('My secret number: ', secretNumber);
// console.log(typeof secretNumber);
let guessTries = 4;

let winner = `
██╗░░░██╗░█████╗░██╗░░░██╗  ░██╗░░░░░░░██╗░█████╗░███╗░░██╗██╗
╚██╗░██╔╝██╔══██╗██║░░░██║  ░██║░░██╗░░██║██╔══██╗████╗░██║██║
░╚████╔╝░██║░░██║██║░░░██║  ░╚██╗████╗██╔╝██║░░██║██╔██╗██║██║
░░╚██╔╝░░██║░░██║██║░░░██║  ░░████╔═████║░██║░░██║██║╚████║╚═╝
░░░██║░░░╚█████╔╝╚██████╔╝  ░░╚██╔╝░╚██╔╝░╚█████╔╝██║░╚███║██╗
░░░╚═╝░░░░╚════╝░░╚═════╝░  ░░░╚═╝░░░╚═╝░░░╚════╝░╚═╝░░╚══╝╚═╝
`;

let reward = `________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
___¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
¶¶¶¶______¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_______¶¶¶¶
¶¶¶_______¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________¶¶¶
¶¶________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________¶¶¶
¶¶¶_____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______¶¶¶
¶¶¶____¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶____¶¶¶¶
_¶¶¶___¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶____¶¶¶
_¶¶¶¶___¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶¶__¶¶¶¶
___¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶¶¶
____¶¶¶¶¶¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶¶¶¶¶¶¶
______¶¶¶¶¶¶__¶¶¶¶¶¶¶¶¶¶¶¶¶¶___¶¶¶¶¶¶
_______________¶¶¶¶¶¶¶¶¶¶¶¶
_________________¶¶¶¶¶¶¶¶
___________________¶¶¶¶
___________________¶¶¶¶
___________________¶¶¶¶
___________________¶¶¶¶
_______________¶¶¶¶¶¶¶¶¶¶¶¶
____________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
____________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
____________¶¶¶____________¶¶¶
____________¶¶¶____________¶¶¶
____________¶¶¶____________¶¶¶
____________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
____________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
__________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
_________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
`;


let welcome = 'Welcome to the classic Node CLI interactive \'Number Guessing Game\'!'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function welcoming(welcome) {
    console.log(welcome);
    rl.setPrompt('Please, only type in actual whole numbers and hit \'return\' or \'enter\' after! You have 5 guesses only. My secret number is between 0 and 100, inclusive. What\'s my secret number? ');
    rl.prompt();
    rl.on('line', answer => {

        let guess = Number(answer);


        if (guessTries === 0) {

            if (guess > 100 || guess < 0) {
                console.log('That\'s either beyond or below the range of possible numbers to guess from and-');
                console.log("sorry, but you used up all your guesses and couldn\'t guess my secret number. Maybe, better luck next time! Good bye!");
                console.log('My secret number was: ', secretNumber);
                rl.close();
            }
            else if (guess === secretNumber) {


                console.log('That\'s correct! You guessed my secret number! Wow! Impressive...');
                console.log('You won!');
                console.log('You had ' + guessTries + ' guesses left.');

                rl.close();
            } else if (guess < secretNumber) {


                console.log('Too low. Sorry, but you used up all your guesses and couldn\'t guess my secret number. Maybe, better luck next time! Good bye!');
                console.log('My secret number was: ', secretNumber);
                rl.close();

            } else if (guess > secretNumber) {


                console.log('Too high. Sorry, but you used up all your guesses and couldn\'t guess my secret number. Maybe, better luck next time! Good bye!');
                console.log('My secret number was: ', secretNumber);
                rl.close();

            } else {
                console.log('That\'s not a number! Sorry, but you used up all your guesses and couldn\'t guess my secret number. Maybe, better luck next time! Good bye!');
                console.log('My secret number was: ', secretNumber);
                rl.close();
            }

        } else if (guess > 100 || guess < 0) {
            console.log('That\'s either beyond or below the range of possible numbers to guess from.');
            console.log('You have ' + guessTries + ' guesses left.');

        }
        else if (guess === secretNumber) {


            console.log('That\'s correct! You guessed my secret number! Wow! Impressive...');
            console.log('You won!');
            console.log('You had ' + guessTries + ' guesses left.');
            console.log(winner);
            console.log(reward);
            rl.close();
        } else if (guess < secretNumber) {

            console.log('Too low, guess higher next time.');
            console.log('You have ' + guessTries + ' guesses left.');

        } else if (guess > secretNumber) {

            console.log('Too high, guess lower next time.');
            console.log('You have ' + guessTries + ' guesses left.');

        } else {

            console.log('Please type in only actual numbers!');
            console.log('You have ' + guessTries + ' guesses left.');
        }
        guessTries--;
    });
};

welcoming(welcome);