"use strict"; 

const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');

// Inquirer Prompts
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description application.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do users install dependencies?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'video',
            message: 'Add a link to a video showing the user how to use the application.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines for contribution?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be used to run tests?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license for this application',
            choices: ['MIT','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', "The Unlicense" ],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
    ])
}

// Function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./READMESample.md', (data), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve(console.log("File was created"))
        })
        
    });
};

// Initialize the prompt and subsequent callbacks to generate MD and write MD
promptUser()
    .then(data => generateMD(data))
    .then(data => writeToFile(data));