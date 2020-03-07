const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

async function getUserInfo() {
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
  // let { image } = await inquirer.prompt({
  //   message: "What's your linkedIn?",
  //   name: "image",
  //   type: "input"
  // });

  inquirer
    .prompt({
      message: "Enter your GitHub username:",
      name: "userName"
    })
    .then(function({ userName }) {
      const queryUrl = `https://api.github.com/users/${userName}/repos?per_page=100`;

      axios.get(queryUrl).then(function(res) {
        const image = res.data[0].owner.avatar_url;
        createReadMe(
          userName,
          projName,
          projDescription,
          projLicense,
          dependencies,
          tests,
          image
        );
      });
    });
}

function createReadMe(
  userName,
  projName,
  projDescription,
  projLicense,
  dependencies,
  tests,
  image
) {
  let userInfo = `
  # ${projName} 	\n \n [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [GitHub](https//:github.com/${userName} "GitHub") \n \n ## Description \n \n ${projDescription} \n \n ## Table of Contents \n \n ![Markdown Logo](${image})`;

  fs.writeFile("README.md", userInfo, function(err) {
    if (err) throw err;
    console.log("File Created!");
  });
}

getUserInfo();
