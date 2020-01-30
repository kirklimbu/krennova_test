var faker = require('faker');

var database = { clients: []};

for (var i = 1; i<= 300; i++) {
  database.clients.push({
    name: faker.name,
    address: faker.lorem.sentences(),
    purposeOfVisit: faker.firstName,
    mobile: faker.random.number()
  });
}

console.log(JSON.stringify(database));
