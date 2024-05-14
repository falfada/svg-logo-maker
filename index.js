// Import the inquirer module
const inquirer = require('inquirer');
// Import the prompt module from inquirer that limits characters
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
// Import the svg.js file
const Svg = require('./lib/svg');
// Import the file system module
const fs = require('fs');

// Register the new prompt
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Function that creates an Svg object and writes it into the logo.svg file
function handleResponse(answers){
    const newLogo = new Svg(answers.logoText, answers.textColor, answers.shape, answers.shapeColor);
    fs.writeFile('logo.svg', newLogo.createSvg(), (err) =>  err ? console.error(err) : console.log('Generated logo.svg'));
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


// Inquirer prompt
inquirer.prompt(questions).then(handleResponse);