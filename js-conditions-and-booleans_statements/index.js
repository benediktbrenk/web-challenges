console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2) {
  console.log("Odd number");
} else {
  console.log("Even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000001;

if (numberOfHotdogs < 5) {
  console.log(2);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log(1.5);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs <= 1000000) {
  console.log(1);
} else if (numberOfHotdogs > 1000000) {
  console.log(0.1);
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  "Hello " + (userName === "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);
