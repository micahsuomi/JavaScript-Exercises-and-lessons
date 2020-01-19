  
    const DOMvariables = {
    
        textInput: '.text-input',
        numInput: '.num-input',
        display: '.display',
        textResult: '.text-result',
        numResult: '.num-result',
        currIncome: '.current-income'
    }

    let textInput= document.querySelector(DOMvariables.textInput);
    let numInput = document.querySelector(DOMvariables.numInput);
    let display = document.querySelector(DOMvariables.display);
    let textResult = document.querySelector(DOMvariables.TextResult);
    let numResult = document.querySelector(DOMvariables.numResult);
    let currIncome = document.querySelector(DOMvariables.currIncome);

    display.addEventListener('click', display = () => {


        textResult = document.createElement('div');
        numResult = document.createElement('div');
        textResult.textContent = textInput.value;
        numResult.textContent = parseInt(numInput.value);
        document.body.appendChild(textResult);
        document.body.appendChild(numResult);
        let currIncome = 0;
        currIncome.textContent = currIncome + numResult;
        console.log(numResult)
        return (numResult)

        //calculateTotalIncome();
    });

   


/*
    calculateTotalIncome = () => {
        let income = 0;
        currIncome.textContent = currIncome + numResult;
        return currIncome
    }*/



     personAccount = {
            firstName: "John",
            lastName: "Gaddis",
            income:  
                     {
                        salary: 4200,
                        dividends: 300, 
                        property: 250, 
                        funds: 100 
                    },

            expenses:  
                    {
                        mortgage: 900,
                        maintenance: 300,
                        bills: 200,
                        daycare: 200,
                        },
            

            totalIncome: function() {
                const income = Object.values(personAccount.income); 
                let count = 0;
                for (const item in income) {
                    count = count + income[item];
                }
                return count;     
           
            },

            totalExpenses: function() {
                const expenses = Object.values(personAccount.expenses);
                let count = 0;
                for (const item in expenses) {
                    count = count + expenses[item];
                }

                return count;

            },

            accountBalance: function() {
                totalIncome = `${personAccount.totalIncome()}`;
                totalExpenses = `${personAccount.totalExpenses()}`;
                accountBalance = totalIncome - totalExpenses;
                return accountBalance; 

            },    

           
           

            addExpense: function(type, amount) {
                personAccount.expenses[type] = amount;
       
            },
            
            accountInfo: function() {
                console.log(`Name is ${this.firstName} ${this.lastName}. He makes ${personAccount.totalIncome()} per month. He has expenses for ${personAccount.totalExpenses()} per month. His account balance is ${personAccount.accountBalance()}`)
                
            } 
          
            }

            let DOMstrings = {

                        balance: '.account-balance',
                        accountName: '.account-name',
                        income: '.income',
                        addIncome: '.btn-add-income',
                        totalIncome: '.total-income',
                        totalExpenses: '.total-expenses'
            
                    }

            let income = document.querySelector(DOMstrings.income);
            let balance = document.querySelector(DOMstrings.balance);
            let accountName = document.querySelector(DOMstrings.accountName);
            let addIncome = document.querySelector(DOMstrings.addIncome);
            let totalIncome = document.querySelector(DOMstrings.totalIncome);
            let totalExpenses = document.querySelector(DOMstrings.totalExpenses);

            accountName.textContent = `${personAccount.firstName} ${personAccount.lastName}`;
            totalIncome.textContent = personAccount.totalIncome();
            addIncome.addEventListener('click',  addIncome = (type, amount) => {
                personAccount.income[type] = amount;
                income.textContent = amount;
                    
                    
            });
            totalExpenses.textContent = personAccount.totalExpenses();
            balance.textContent = personAccount.accountBalance();

            

            console.log(personAccount);
            console.log('=========== totalIncome ============')
            console.log(`${personAccount.firstName}'s account total income is ${personAccount.totalIncome()}`);
           
            console.log('=========== totalExpenses ============')
            console.log(`${personAccount.firstName}'s account total expenses are ${personAccount.totalExpenses()}`);
            
            console.log('=========== accountBalance ============')
            console.log(`${personAccount.firstName}'s account balance is ${personAccount.accountBalance()}`)

            console.log('=========== accountInfo ============')
            console.log(personAccount.accountInfo());

            console.log('=========== addIncome ============')
           

            console.log('=========== addExpense ============')
            console.log(`${personAccount.addExpense('baby', 200)}`);
            //console.log(personAccount.expenses);
            console.log(personAccount.expenses);
            console.log(personAccount);
            console.log(`${personAccount.firstName}'s account balance is ${personAccount.accountBalance()}`)

           
            accountBalance.textContent = personAccount.accountBalance();


            