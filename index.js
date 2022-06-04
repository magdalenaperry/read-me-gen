const inquirer = require('inquirer');
const fs = require('fs')

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
                validate: function (answer) {
                    if (answer.length === 0) {
                        return console.log("Please enter a project title.")
                    };
                    return true;
                }
            }, 
            {
                type: 'input',
                message: 'What is the name of your repository?',
                name: 'repoName',
                validate: function (answer) {
                    if (answer === 0) {
                        return console.log("Please enter a valid repo name.")
                    };
                    return true;
                }
            }, 
            {
                type: 'input',
                message: 'Please describe your project in complete sentences.',
                name: 'description',
                validate: function (answer) {
                    if (answer === 0) {
                        return console.log("Please enter a project description.")
                    };
                    return true;
                }
            }, 
            {
                type: 'checkbox',
                message: 'Select all technologies used to build this project. ',
                name: 'technologies',
                // validate: function (answer) {
                //     if (answer === 0) {
                //         return console.log("Please enter at least one technology used.")
                //     };
                //     return true;
                // },
                choices: [{
                        name: 'Html ',
                        value: 'HTML'
                    },
                    {
                        name: 'Handlebars.js ',
                        value: 'Handlebars.js'
                    },
                    {
                        name: 'Inquirer ',
                        value: 'Inquirer'
                    },
                    {
                        name: 'React ',
                        value: 'React'
                    },
                    {
                        name: 'Model View Controllers ',
                        value: 'Model View Controllers '
                    },
                    {
                        name: 'Bootstrap ',
                        value: 'Bootstrap'
                    },
                    
                ]
            },

            // {
            //     type: 'input',
            //     message: 'What is your github username?',
            //     name: 'github',
            //     validate: function (answer) {
            //         if (answer === 0) {
            //             return console.log("Please enter your username.")
            //         };
            //         return true;
            //     }
            // },
            // {
            //     type: 'input',
            //     message: 'What is your email?',
            //     name: 'email',
            //     validate: function (answer) {
            //         if (answer === 0) {
            //             return console.log("Please enter your email.")
            //         };
            //         return true;
            //     }
            // },
            {
                type: 'rawlist',
                message: 'Select any prerequisites for installation.',
                name: 'prerequisites',
                choices: [{
                        name: 'npm',
                        value: 'npm'
                    },
                    {
                        name: '',
                        value: ''
                    },
                    
                ]
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
                type: 'rawlist',
                message: 'Select the licensure you would like to include in your project.',
                name: 'license',
                choices: [{
                        name: 'MIT',
                        value: 'MIT'
                    },
                    {
                        name: 'BSD 3',
                        value: 'BSD_3--Clause'
                    },
                    {
                        name: 'APACHE 2.0',
                        value: 'Apache_2.0'
                    },
                    {
                        name: 'GPI 3.0',
                        value: 'GPI_3.0'
                    }
                ]
            },
            {
                type: 'input',
                message: 'Contributor GitHub username',
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
                technologies,
                repoName,
                usage,
                license,
                contributions,
                tests,
                github,
                email

            }) {

                const template =

`


[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

# ${title}

<a href="https://github.com/magdalenaperry/${repoName}">
    <img src="https://via.placeholder.com/200" alt="Logo" width="100%" height="100%">
  </a>



![](https://img.shields.io/badge/License-${license}-white.svg)

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Visuals](#visuals)
5. [License](#license)
6. [Contributions](#contributions)
7. [Tests](#tests)
8. [Questions](#questions)

---
## Description
${description}

### Built With
${technologies}

### Prerequisites

---
## Installation
    ${installation}

---
## Usage
${usage}

---
## Visuals
![Demo Link](http://youtube.com)


---
## License
${license}

---
## Contributions
${contributions}

---
## Tests
    ${tests}

---

## Roadmap
- [x] List Item
- [x] List Item
- [ ] List Item
- [ ] List Item
- [ ] List Item
    - [ ] Chinese
    - [ ] Spanish


## Contact
For any additional questions, please reach out to me through email and follow me on GitHub.

Name - [Magdalena Perry LinkedIn](https:www.linkedin.com/in/magdalenaperry) - mageltron@gmail.com

Github - [magdalenaperry](https://www.github.com/magdalenaperry)

email - [mageltron@gmail.com](mageltron@gmail.com)


## Acknowledgements





[contributors-shield]: https://img.shields.io/github/contributors/magdalenaperry/${repoName}.svg?style=for-the-badge
[contributors-url]: https://github.com/magdalenaperry/${repoName}/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/magdalenaperry/${repoName}.svg?style=for-the-badge
[forks-url]: https://github.com/magdalenaperry/${repoName}/network/members
[stars-shield]: https://img.shields.io/github/stars/magdalenaperry/${repoName}.svg?style=for-the-badge
[stars-url]: https://github.com/magdalenaperry/${repoName}/stargazers
[issues-shield]: https://img.shields.io/github/issues/magdalenaperry/${repoName}.svg?style=for-the-badge
[issues-url]: https://github.com/magdalenaperry/${repoName}/issues
[license-shield]: https://img.shields.io/github/license/magdalenaperry/${repoName}.svg?style=for-the-badge
[license-url]: https://github.com/magdalenaperry/${repoName}/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/magdalenaperry
[product-screenshot]: images/screenshot.png

`;


                createNewFile(title, template);
            });

    function createNewFile(fileName, template) {
        fs.writeFile('./dist/README.md', template, (err) => {
            err ? console.error(err) : console.log('Yay! The gears have stopped turning. Your README file is complete.')
        });
    }
}

init();