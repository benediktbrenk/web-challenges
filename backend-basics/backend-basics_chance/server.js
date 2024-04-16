import { createServer } from "node:http";
import { Chance } from "chance";

const chance = new Chance();
const name = chance.name();
const age = chance.age();
const profession = chance.profession();

export const server = createServer((request, response) => {
  if (request.url === "/") {
    const res = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;
    response.statusCode = 200;
    response.end(res);
  }
});
