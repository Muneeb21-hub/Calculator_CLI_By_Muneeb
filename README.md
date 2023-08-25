# Calculator_CLI_By_Muneeb

# Simple Calculator

A simple command-line calculator that allows you to perform basic arithmetic operations.

## Description

Welcome to the Simple Calculator! This program enables you to perform basic arithmetic operations on two numbers. You can choose between addition, subtraction, multiplication, and division. The program will guide you through entering the numbers and selecting the operation, and then it will display the result.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your terminal and navigate to the directory where the calculator files are located.

3. Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

4. Install the required dependencies using the following command:

   ```sh
   npm install
   ```

5. Start the calculator by running the following command:

   ```sh
  tsc calculator.ts && node calculator.js
   ```

6. Follow the prompts to enter the two numbers and select the operation you want to perform.

7. The program will display the result of the selected operation.

## Code Overview

The calculator is implemented using JavaScript and the `inquirer` library for user input. Here's a brief overview of how the code works:

- The program prompts the user to enter two numbers and select an arithmetic operation.
- It validates the user's input and performs the selected operation.
- The result is displayed on the screen.

Feel free to explore the code and customize it as you see fit. You can extend this calculator by adding more complex operations or error handling.

## Dependencies

- [Node.js](https://nodejs.org/)
- [inquirer](https://www.npmjs.com/package/inquirer)

## Author

Muneeb u Rehman