const BankAccount = require("./account.js");
const account = new BankAccount("mary", 10000);

// const accounts = []
// accounts.push(account.info())

test("open account with name and an amount of 10000", () => {
  account.open();
  console.log("Account:", account);
  expect(account.status).toBe("open");
  expect(account.name).toBe("mary");
  expect(account.balance).toBe(10000);
});

test("getBalance of the account", () => {
  expect(account.getBalance()).toBe(10000);
});

test("deposit balance += amount on the account", () => {
  account.deposit(5000);
  expect(account.getBalance()).toBe(15000);
});

test("withdraw balance -= amount on the account", () => {
  const balance = account.getBalance();
  const amount = 5000;
  account.withdraw(amount);
  expect(account.getBalance()).toBe(balance - amount);
});

test("close  the account", () => {
  account.close();
  expect(account.status).toBe("closed");
});