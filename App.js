let balance = 0;

function scrollToPlans() {
    document.getElementById("plans").scrollIntoView({behavior:"smooth"});
}

function invest() {
    let amount = prompt("Enter the amount you want to invest (minimum $200):");
    amount = parseFloat(amount);
    if(amount < 200) {
        alert("Minimum investment is $200");
        return;
    }
    let profit = amount * 0.12; // example 12% profit
    alert("Investment accepted! Potential monthly profit: $" + profit.toFixed(2));
    balance += amount;
    updateBalance();
}

function deposit() {
    let amount = prompt("Enter deposit amount (minimum $200):");
    amount = parseFloat(amount);
    if(amount < 200) {
        alert("Minimum deposit is $200");
        return;
    }
    balance += amount;
    alert("Deposit successful! Current balance: $" + balance.toFixed(2));
    updateBalance();
}

function withdraw() {
    let amount = prompt("Enter amount to withdraw:");
    amount = parseFloat(amount);
    if(amount > balance) {
        alert("Insufficient balance!");
        return;
    }
    balance -= amount;
    alert("Withdrawal successful! Current balance: $" + balance.toFixed(2));
    updateBalance();
}

function updateBalance() {
    document.getElementById("balance").innerText = "Balance: $" + balance.toFixed(2);
}
