//to run this code : npx ts-node .\calculator.ts add 5 3

function add(a: number, b: number): number {
  return a + b
}

function subtract(a: number, b: number): number {
  return a - b
}

function multiply(a: number, b: number): number {
  return a * b
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Division by zero is not allowed')
  }
  return a / b
}

// Read the command line arguments
const [operation, operand1, operand2] = process.argv.slice(2)

// Convert the operands to numbers
const num1 = parseFloat(operand1)
const num2 = parseFloat(operand2)

let result: number

// Perform the selected operation
switch (operation) {
  case 'add':
    result = add(num1, num2)
    break
  case 'subtract':
    result = subtract(num1, num2)
    break
  case 'multiply':
    result = multiply(num1, num2)
    break
  case 'divide':
    result = divide(num1, num2)
    break
  default:
    throw new Error('Invalid operation')
}

console.log('Result:', result)
