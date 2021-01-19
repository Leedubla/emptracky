const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
inquirer
  .prompt([
    {
      name: "user_name",
      type: "input",
      message: "What is your name?",
    },
    {
        name:"boss",
        type:"checkbox",
        message:"Who is your boss",
        choices:["James with Accounting", "John with Finance", "Joe with Development", "Allen with Managment"]
    },
    {
        name:"role",
        type:"checkbox",
        message:"What is your position",
        choices:["Employee","Engineer","Intern","Manager"]
    },
    {
        name:"github",
        type:"input",
        message:"Please type your GitHub username..",
        
    }
  ])
  .then((answer) => {
    console.log("Hello " + answer.user_name,role);
  })
  

