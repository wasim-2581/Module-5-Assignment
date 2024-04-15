class BankAccount{
    accountNumber = '';
    ownerName = '';
    balance = 0;

    constructor(accountNumber, ownerName, balance){
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
        console.log("Created account for " + this.ownerName);
    }

    deposit(amount){
        this.balance += amount;
        console.log("Deposited $" + amount + " for Account Name " + this.ownerName);
    }

    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
            console.log("Widrwan $" + amount + " from Account Name " + this.ownerName);
        }else{
            console.log(this.ownerName + " Has Insufficient funds to widraw $" + amount);
        }
    }

    getBalance(){
        return this.balance;
    }

    displayAccountInfo(){
        let msg = "Account Number: "+ this.accountNumber +"\nOwner Name: "+ this.ownerName +"\nBalance: $"+ this.balance;
        console.log(msg);
    }
}


let wasim = new BankAccount("1234", "Wasim Chowdhury", 12);
let karim = new BankAccount("5678", "Karim Hossen", 0);

wasim.displayAccountInfo();
wasim.deposit(10);
wasim.displayAccountInfo();
wasim.withdraw(32);

karim.displayAccountInfo();
karim.deposit(20);
karim.displayAccountInfo();
karim.withdraw(10);
karim.displayAccountInfo();


