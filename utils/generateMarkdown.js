function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license.`;
}
return '';
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.decription}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseBadge(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependancies, run the following command:

${data/installation}

## Usage


## License

This project is licensed under the MIT license

## Contributing

## Tests 

To run test, run the following command;

npm test

## Questions
`;
}

module.exports = generateMarkdown;
