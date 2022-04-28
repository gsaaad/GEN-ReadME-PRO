// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkDown = require("./utils/generateMarkdown");
const path = require("path");

const readName = "GeneratedREADME.md";
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
      type: "list",
      name: "License",
      message: "Enter a License for your project:",
      choices: [
        "MIT",
        "Apache License",
        "GNU General Public License",
        "The Unlicense",
        "Eclipse Public License",
        "Boost Software License",
      ],
    },
    {
      type: "input",
      name: "Contribution",
      message: "Any contributors?",
    },
    {
      type: "input",
      name: "Tests",
      message: "Enter a test to check your project usability",
    },
    {
      type: "input",
      name: "emailMe",
      message: "Enter your email to be contacted for questions! :)",
    },
    {
      type: "input",
      name: "gitName",
      message: "Enter your github name: ",
    },
  ];
  return inquirer.prompt(questions);
};
promptUserQuestions().then((answers) => {
  // console.log(answers);
  //write a file, this [...object] using  spread operator, calling function from utils
  writeToFile(readName, generateMarkDown({ ...answers }));
});

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
