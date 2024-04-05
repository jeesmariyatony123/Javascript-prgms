class Bank {
    accountDetails = {
        //key:value
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
    }

    //validate account number function
    validateAccount(acno) {
        return this.accountDetails.hasOwnProperty(acno)
    }
    //authenticate account(acno,password)

    authenticateAccount(acno, pswd) {
        if (this.validateAccount(acno)) {
            if (this.accountDetails[acno].password == pswd) {
                console.log("Authentication successful");
            } else {
                console.log("Authentication failed!!! Incorrect Password...");
            }
        } else {
            console.log("Authentication failed!!! Incorrect Account Number...");
        }
    }
    //balance enquiry function
    balanceEnquiry(acno) {
        this.validateAccount(acno) ? console.log(`Balance of account ${acno} is ${this.accountDetails[acno].balance}`) : console.log(`Incorrect Account Number...`);
    }
    //function for fund transfer
    fundTransfer(fromAcno, toAcno, amount) {
        if (this.validateAccount(fromAcno)) {
            if (this.validateAccount(toAcno)) {
                if (this.accountDetails[fromAcno].balance > amount) {
                    console.log(`before transaction:Debit account ${fromAcno} balance is ${this.accountDetails[fromAcno].balance} and credict account ${toAcno} balance is ${this.accountDetails[toAcno].balance}`);
                    this.accountDetails[fromAcno]["balance"] -= amount
                    this.accountDetails[toAcno].balance += amount
                    console.log("Transaction completed successfully");
                    console.log(`After transaction: debit account ${fromAcno} balance is ${this.accountDetails[fromAcno].balance} and credict account ${toAcno} balance is ${this.accountDetails[toAcno].balance}`);
                }
                else {
                    console.log("Transaction failed... Insufficent balance!!!");
                }
            } else {
                console.log("Transaction failed... Invalid credit account number");
            }

        } else {
            console.log("Transaction failed... Invalid debit account number");
        }
    }
}
const acc_holder = new Bank()
console.log(acc_holder.validateAccount(1000) ? "valid account" : "invalid account");
acc_holder.authenticateAccount(1000, "userone")
acc_holder.balanceEnquiry(1002)
acc_holder.fundTransfer(1002, 1003, 1000)