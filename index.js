const inquirer = require("inquirer");

const fs = require("fs");

async function getUserInfo() {
  let { userName } = await inquirer.prompt({
    message: "Enter your GitHub username",
    name: "userName",
    type: "input"
  });

  let { projName } = await inquirer.prompt({
    messgae: "what is your project's name?",
    name: "projName",
    type: "input"
  });

  let { projDescription } = await inquirer.prompt({
    message: "Please provide a short description of your project",
    name: "projDescription",
    type: "input"
  });

  let { projLicense } = await inquirer.prompt({
    message: "What kind of license should your project have?",
    name: "projLicense",
    type: "input"
  });

  let { dependencies } = await inquirer.prompt({
    message: "What command should be run to install deoendencies?",
    name: "dependencies",
    type: "input"
  });

  let { tests } = await inquirer.prompt({
    message: "What coomand should be run to run tests?",
    name: "tests",
    type: "input"
  });
  let { linkedinURL } = await inquirer.prompt({
    message: "What's your linkedIn?",
    name: "linkedinURL",
    type: "input"
  });
  createReadMe(
    userName,
    projName,
    projDescription,
    projLicense,
    dependencies,
    tests,
    linkedinURL
  );
}

function createReadMe(
  userName,
  projName,
  projDescription,
  projLicense,
  dependencies,
  tests,
  linkedinURL
) {
  let userInfo =
    " username: " +
    userName +
    " Project Name: " +
    projName +
    " Description: " +
    projDescription +
    " License: " +
    projLicense +
    " dependencies: " +
    dependencies +
    " tests: " +
    tests +
    " LinkedIn URL: " +
    linkedinURL;
  fs.appendFile("README.md", userInfo, function(err) {
    if (err) throw err;
    console.log("Saved!");
  });
}

// getUserInfo().then(function(response) {
//   console.log("response: ");
//   console.log(response);
// });

getUserInfo();
