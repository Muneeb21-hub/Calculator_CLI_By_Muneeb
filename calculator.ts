async function calculator() {
    const questions = [
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first number:'
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second number:'
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select the operation:',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide']
        }
    ];

    let inquirer;
    try {
        inquirer = await import('inquirer');
    } catch (error) {
        console.error("Error importing 'inquirer':", error);
        return;
    }

    const answers = await inquirer.default.prompt(questions);

    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);

    let result;

    switch (answers.operation) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Subtract':
            result = num1 - num2;
            break;
        case 'Multiply':
            result = num1 * num2;
            break;
        case 'Divide':
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operation');
            return;
    }

    console.log(`Result: ${result}`);
}

calculator();