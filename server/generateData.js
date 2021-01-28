var faker = require("faker");

var database = { users: [] };

for (var i = 1; i <= 30; i++) {
  database.users.push({
    id: i,
    name: faker.commerce.name(),
    address: faker.commerce.address(),
    age: faker.commerce.age(),
  });
}

console.log(JSON.stringify(database));
src/app/fakeDataGenerator/generateData.js
