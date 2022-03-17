const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');
// const {
//     title
// } = require('process');

const license = ['MIT', 'Apache', 'GPL', 'BSD', 'LGPL']

inquirer
    .prompt([{
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
            validate: function (answer) {
                if (answer.length === 0) {
                    return console.log("Please enter a valid project title.")
                };
                return true;
            }
        }, {
            type: 'input',
            message: 'Please describe your project in complete sentences.',
            name: 'description',
            validate: function (answer) {
                if (answer === 0) {
                    return console.log("Please enter a valid project description.")
                };
                return true;
            }
        }, {
            type: 'input',
            message: 'What is your github username?',
            name: 'github',
            validate: function (answer) {
                if (answer === 0) {
                    return console.log("Please enter your username.")
                };
                return true;
            }
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            validate: function (answer) {
                if (answer === 0) {
                    return console.log("Please enter your email.")
                };
                return true;
            }
        },
        {
            type: 'input',
            message: 'Provide instructions to include in the installation section.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Provide instructions of your project for the usage section.',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'Select the licensure you would like to include in your project.',
            name: 'license',
            choices: license
        },
        {
            type: 'input',
            message: 'List any contributions.',
            name: 'contributions',
        }, {
            type: 'input',
            message: 'Please include any tests.',
            name: 'tests',
        }

    ])

    .then(
        function getAnswers({
            title,
            description,
            installation,
            usage,
            license, 
            contributions, 
            tests, 
            github, 
            email
        }) {

            const template =
`# ${title}
##Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributions](#contributions)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Contrbutions
${contributions}

## Tests
${tests}

## Questions
For any additional questions, please reach out to me through email.


github: 
[github link](https://www.github.com/${github})

email: 
${email}`;

            createNewFile(title, template);
        });


function createNewFile(fileName, template) {
    fs.writeFile('./dist/README.md', template, (err) => {
        err ? console.error(err) : console.log('success!')
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();