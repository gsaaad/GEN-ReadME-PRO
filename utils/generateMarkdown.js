// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return "RENDER LICENSE BADGE";
  } else {
    return "";
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
${data.License}
## Contribution
  ${data.Contribution}
## Tests
${data.Tests}

## Questions

If you have questions, email me @ : ${data.emailMe}/ Github: [${data.gitName}](https://github.com/${data.gitName})

`;
}

module.exports = generateMarkdown;
