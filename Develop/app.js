"use strict";
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description application.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do users install dependencies?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are the guidelines for contribution?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be used to run tests?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is your license for this application',
            choices: ['MIT','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', "The Unlicense" ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email'
        },
    ])
}

// Create a function to write README file
function writeToFile(data) {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./README.md', (data), err => {
            if (err) {
                reject(err);
                return;
            }
            resolve("File was created")
        })
        
    });
};

promptUser()
    .then(data => generateMD(data))
    .then(data => writeToFile(data));
    // then send this data to generatePage
        // this will create the html template with the user data
    // then use fs to write this file.

