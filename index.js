const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const gM = require("./util/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
function promptUser() {
  const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a description of the project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation instruction.",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe usage.",
    },
    {
      type: "checkbox",
      name: "choose a license",
      message: "License",
      choices: [
        "MIT license",
        "Apache license",
        "GPL license",
        "Public domain(Unlicensed)",
      ],
    },
    {
      type: "input",
      name: "contribution",
      message: "Who contribute to this application?",
    },
    {
      type: "input",
      name: "authors",
      message: "Who are the authors?",
    },
    {
      type: "input",
      name: "tests",
      message: "Run test here",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "Enter email",
    },
  ];
  return inquirer.prompt(questions);
}
console.clear();

// function to initialize program
async function init() {
  try {
    const response = await promptUser();
    const readme = gM.generateMarkdown(response);
    await writeFileAsync("README.md", readme);
    console.log("Success!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
