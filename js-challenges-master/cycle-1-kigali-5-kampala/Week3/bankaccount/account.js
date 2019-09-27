class BankAccount {
    constructor(name,balance) {
        // your code here
        this.name = name;
        this.balance = balance;
        this.status = "closed";
       

    }

    getBalance() {
        // your code here
        return this.balance;
    }

    open() {
        // your code here
        return this.status ="open";
    }

    deposit() {
        // your code here
        return this.balance += amount;
    }

    withdraw() {
        // your code here
        return this.balance -= amount;
    }

    close(){
        return this.status = "closed"

    }
}