var password = 1234;

//var ask;
//var DepositAmount;
//var WithdrawAmount;
//var attempts;
//var targetNumber;//for deposits of Others Account
Introduction();
function Introduction(){
    var ask;
    var attempts = 0;
    while(attempts != 5){
        ask = prompt('what is the password: ');
        if(attempts != 4 && ask == password){
            //depo or withdraw 
            //Savings Acc or Family Acc
            //how much
            //Another Transacation??
            attempts += 1;
            console.log(attempts);
            depoOrWithdraw();
            break;
        }
        else if(attempts == 4){
            alert('sorry, but your card has been confiscated.');
            break;
        }
        else if(attempts != 4 && ask != password){
            alert('The password is incorrect, please try again.');
            attempts += 1;
            console.log(attempts);
        }
    }
}

function depoOrWithdraw(){
    var DepositAmount;
    var WithdrawAmount;
    var targetNumber;
    var ask;
    var accounts;
    var savingsAccount = 1000;
    var familyAccount = 0;
    ask = prompt('Enter "w" to withdraw and "f" to deposit \nor press "t" to see your total value"');
    //Withdraw option
    if(ask == 'w'){
        accounts = prompt('Enter "s" for savings account and\n"f" for family account withdrawal');
        //savings account for withdraw
        if(accounts == 's'){
            WithdrawAmount = prompt('How much would you like to withdraw?');
            savingsAccount = savingsAccount - WithdrawAmount;
            alert('withdrawn $'.concat(WithdrawAmount)+' successfully');
            //true or false
            AnotherTransactionsfunc();
        }
        else if(accounts == 'f'){
            WithdrawAmount = prompt('How much would you like to withdraw?');
            familyAccount = familyAccount - WithdrawAmount;
            alert('withdrawn $'.concat(WithdrawAmount)+' successfully');
            //true or false
            AnotherTransactionsfunc();
        }
        
    }
    else if(ask =='t'){
        alert("you have $".concat(savingsAccount).concat(' in your savings account')+' and $'.concat(familyAccount).concat(' in your family account'));
    }
    //Deposit option
    else if(ask=='f'){
        accounts = prompt('Enter "s" for savings account and\n"f" for family account transfer');
        if(accounts == 's'){
            targetNumber = prompt('Plase input you target account to deposit...');
            DepositAmount = prompt('How much would you like to deposit?');
            savingsAccount = savingsAccount + DepositAmount;
            alert('deposited $'.concat(DepositAmount)+' successfully to '.concat(targetNumber));
            //true or false
            AnotherTransactionsfunc();
    }
    
        else if(accounts == 'f'){
            targetNumber = prompt('Please input you target account to deposit...');
            DepositAmount = prompt('How much would you like to deposit?');
            familyAccount = familyAccount + DepositAmount;
            alert('deposited $'.concat((DepositAmount)+' successfully to '.concat(targetNumber)));
            //true or false
            notherTransactionsfunc();
        }
  }
}


function AnotherTransactionsfunc(){
    var AnotherTransactions;
    AnotherTransactions = confirm('would you like to do another transaction? ');
    if(AnotherTransactions == true){
        depoOrWithdraw();
    }
    else{
        alert('thank you for banking with us..');
    }
}