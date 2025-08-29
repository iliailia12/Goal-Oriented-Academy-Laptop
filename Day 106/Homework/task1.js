// # Level 106:

// # 1. Leap year - Leap Year Challenge Exercise  ----- გააკეთეთ ეს დავალება py და js - ში
// 💪This is a Difficult Challenge 💪

// Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap 
// years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this
//  video goes into more detail.

// This is how to work out whether if a particular year is a leap year:

// A year is a leap year if it is evenly divisible by 4 ;

// except if that year is also evenly divisible by 100;

// unless that year is also evenly divisible by 400.



// e.g. Is the year 2000 a leap year?:

// 2000 ÷ 4 = 500 (Leap)

// 2000 ÷ 100 = 20 (Not Leap)

// 2000 ÷ 400 = 5 (Leap!)



// So the year 2000 is a leap year.

// But the year 2100 is not a leap year because:

// 2100 ÷ 4 = 525 (Leap)

// 2100 ÷ 100 = 21 (Not Leap)

// 2100 ÷ 400 = 5.25 (Not Leap) 
// https://www.youtube.com/watch?v=xX96xng7sAE - details about leap year





// თქვენ აპირებთ დაწეროთ ფუნქცია, რომელიც შეარჩევს შემთხვევით სახელს სახელების სიიდან. შერჩეულმა პირმა უნდა გადაიხადოს ყველას საკვების
//  გადასახადი.
// FizzBuzz - პირობა - თუ რიცხვი სრულად იყოფა 3 ზე, მაშინ სიაში ჩაემატოს Fizz, თუ რიცხვი სრულადიყოფა 5 ზე,
//  მაშინ ჩაემატოს Buzz, თუ რიცხვი 
// სრულად იყოფა 3 ზე და 5 ზე, მაშინ ჩაემატოს FizzBuzz. ის რიცხვები რომლებიც იყოფა, უნდა ამოიშალოს

// თქვენ უნდა დაწეროთ JavaScript ფუნქცია, რომელიც გენერირებს N რაოდენობის შემთხვევით
//  რიცხვებს და მათ შეინახავს მასივში. ფუნქცია დააბრუნებს ამ რიცხვების საშუალო არითმეტიკულს.




function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;  
            } else {
                return false; 
            }
        } else {
            return true; 
        }
    } else {
        return false; 
    }
}


let year = 2000;
console.log(`${year} is a leap year: ${isLeapYear(year)}`); 

year = 2100;
console.log(`${year} is a leap year: ${isLeapYear(year)}`); 