console.clear();
/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

let booktitle = "The Lord of the Javascript";
let author = "Mario";
let rating = 4.2;
let numberOfSales = 120;

/*
2: Log all variables to the console, for example:*/

logBookData();

numberOfSales += 10;
rating = 4.3;

logBookData();

numberOfSales += 10;
rating = 4.4;

logBookData();

numberOfSales += 10;
rating = 4.5;

logBookData();

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

function logBookData() {
  console.log(booktitle);
  console.log(author);
  console.log(rating);
  console.log(numberOfSales);
}
