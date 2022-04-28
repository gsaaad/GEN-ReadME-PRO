function renderBasicTable(license) {
  if (license === "None") {
    return `
    1. [Installation](#installaiton)
    2. [Usage](#usage)
    3. [Contributing](#contributing)
    4. [Tests](#tests)
    5. [Questions](#questions)
    `;
  }
  return `
  1. [Installation](#installaiton)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributing](#contributing)
    5. [Tests](#tests)
    6. [Questions](#questions)
  `;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)";
      break;
    case "Apache License":
      return "[![License: Apache License](https://img.shields.io/badge/License-Apache-yellow)";
      break;
    case "GNU General Public License":
      return "[![License: GNU General Public License](https://img.shields.io/badge/License-GNU%20General%20Public%20License-yellow)";
      break;
    case "The Unlicense":
      return "[![License: The Unlicense](https://img.shields.io/badge/License-The%20Unlicense-yellow)";
      break;
    case "Eclipse Public Licence ":
      return "[![License: Eclipse Public Licence ](https://img.shields.io/badge/License-Eclipse%20Public%20License-yellow)";
      break;
    case "Boost Software License":
      return "[![License: Boost Software License](https://img.shields.io/badge/License-Boost%20Software&20License-yellow)";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return "LICENSE LINK";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return "LICENSE SECTION";
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  console.log(data.License);
  return `#  ${data.ProjectTitle}

  ## Welcome to ${data.ProjectTitle}, an application created to assist you. 
  ${data.Description}.

## Table of Contents

* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)


## Usage

${data.Usage}

## Installation
${data.Installation}
## License

${renderLicenseBadge(data.License)}]
## Contribution
  ${data.Contribution}
## Tests
${data.Tests}

## Questions

If you have questions, email me @ : ${data.emailMe}/ Github: [${
    data.gitName
  }](https://github.com/${data.gitName})

`;
}

module.exports = generateMarkdown;
