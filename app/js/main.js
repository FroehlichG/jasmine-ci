/**
 * Init function.
 * @description Init function
 */
function init(){
    const calculator = new Calculator();
}

class Calculator {
    constructor() {
        this.total = 0;
        this.setEvent();
    }

    setEvent() {
        let input = document.querySelector('.calculator-field');

        if (input) {
            input.addEventListener('change', this.calculate.bind(this))
        } else return;
    }

    calculate(event) {
        const value = event.target.value;
        const expression = /\+|\-|\*|\//;
        const numbers = value.split(expression);
        const numberA = parseInt(numbers[0]);
        const numberB = parseInt(numbers[1]);
        const operation = value.match(expression);

        if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null) {
            this.updateResult('Operation not recognized');
            return
        }

        let result = 0;

        this.add(numberA)

        switch (operation[0]) {
            case '+':
                result = this.add(numberB);
                break;
            case '-':
                result = this.subtract(numberB);
                break;
            case '*':
                result = this.multiply(numberB);
                break;
            case '/':
                result = this.divide(numberB);
                break;
        }

        this.updateResult(result);
        this.total = 0;
    }

    updateResult(result) {
        let resultField = document.querySelector('.result');

        resultField.innerHTML = 'Result ' + result;
    }

    add(number) {
        return this.total += number
    }

    subtract(number) {
        return this.total -= number
    }

    multiply(number) {
        return this.total *= number
    }

    divide(number) {
        if (number === 0) {
            throw new Error('Cannot divide by zero');
        }
        return this.total /= number
    }
}

document.addEventListener('DOMContentLoaded', init);
