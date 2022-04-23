// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const fs = require("fs");

// TODO: Create an array of questions for user input
const promptUserQuestions = () => {
  const questions = [
    {
      type: "input",
      name: "ProjectTitle",
      message: "Lets Start! What's your Project Title?",
    },
    {
      type: "input",
      name: "Description",
      message: "Enter a description:",
    },
    {
      type: "input",
      name: "Installation",
      message: "Enter Installation steps/requirements:",
    },
    {
      type: "input",
      name: "Usage",
      message: "Enter Usage for this project, What problem does it solve?",
    },
    {
      type: "input",
      name: "License",
      message: "Enter a License for your project:",
    },
    {
      type: "input",
      name: "Contribution",
      message: "Any contributors?",
    },
    {
      type: "input",
      name: "Tests",
      message: "Enter a test to check your project usability:",
    },
  ];
  return inquirer.prompt(questions);
};
promptUserQuestions().then((answers) => console.log(answers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
