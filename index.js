// Prompts text (up to three characters)
// Prompt for text color
// Prompt for shape in a list(circle, triangle, and square)
// Prompt for shape color
// Create a file with the name "logo.svg" 300x200px svg image
// Output text `Generated logo.svg`
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

const svg = require('./lib/svg');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);


function handleResponse(answers){
    const svgString = svg.createSvg(answers);
    // writeToFile(fileName, data);
    console.log(answerss);
}
const questions = [
    {
        type: 'maxlength-input',
        name: 'logoText',
        message: 'Enter your logo text',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color keyword or hexadecimal number'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color keyword or hexadecimal number'
    }
];

inquirer.prompt(questions).then(handleResponse);