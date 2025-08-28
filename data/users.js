// temporary in-memory database
// data/users.js

const firstNames = ["Pravin", "Raju", "Amit", "Sita", "Anjali", "Rahul", "Kiran", "Deepa", "Vikas", "Neha"];
const lastNames = ["Kumar", "Sharma", "Patel", "Singh", "Gupta", "Mehta", "Verma", "Rao", "Joshi", "Yadav"];

const users = [];

for (let i = 1; i <= 100000; i++) {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`;
  users.push({ id: i, name, email });
}

module.exports = users;

