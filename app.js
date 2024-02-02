//add, subtract, divide, multiply functions
function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    if (b == 0) {
        alert("you can't divide by 0!")
    } else {
        let num = (a / b).toFixed(2)
        return num
    }
}
//operate function to choose
function operate (a, operator, b) {
    if (operator == "add") {
        return add(a,b)
    } else if (operator == "subtract") {
        return subtract(a,b)
    } else if (operator == "multiply") {
        return multiply(a,b)
    } else if (operator == "divide") {
        return divide(a,b)
    }
}
//each math statement gets in array [num1, operator, num2]
let statement = [];
let ans;
let num = "";
const screenDisplay = document.querySelector("#screen")


//equal button click function
let equalBtn = document.querySelector(".eqlBtn");

equalBtn.addEventListener('click', function() {
    statement.push(Number(screenDisplay.textContent));
    console.log(statement);
    ans = operate(statement[0], statement[1], statement[2]);
    num = "";
    displayContent = ""
    statement = [];
    screenDisplay.textContent = ans.toString();
})

//clear button click function
let clrBtn = document.querySelector(".clearbtn");
clrBtn.addEventListener('click', function() {
    displayContent = ""
    statement = [];
    ans = 0;
    num="";
    screenDisplay.textContent = "";
})




//populating screen w/ number buttons

function calculateNumber () {
    
    let displayContent = ""
    let number;
    let operator;
    //event listener for all buttons for statement (operations + numbers)
    document.getElementById('buttons').addEventListener('click', function (event) {
        const target = event.target;
    
        if (target.classList.contains("numberBtn")) {
            //handles 
            console.log(num);
            num += target.value;
            screenDisplay.textContent = num;
            displayContent = screenDisplay.textContent;
            console.log(statement);
        }
        if (target.classList.contains("operatorBtn")) {
            // Handle operator button click
            number = Number(displayContent);
            operator = target.value;
            statement.push(number)
            //handles logic where you do multiple options without pressing equal button!
            if (statement.length == 3) {
                console.log(statement);
                ans = operate(statement[0], statement[1], statement[2]);
                screenDisplay.textContent = ans.toString();
                num = "";
                statement = [ans, operator];
                console.log(statement);
            } else {
                num = "";
                statement.push(operator)
                console.log(statement);
                screenDisplay.textContent = "";
            }
        }
      }); 
}
calculateNumber();