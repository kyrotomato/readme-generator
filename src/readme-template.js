//create function for licenses
//badge
function createLicenseBadge(license){
    if (license===none){
        return '';
    }
    else {
       return '[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})'
    }
};
//link
function createLicenseLink(license){
    if (license === none) {
    return '';
}
    else{
        return `[Link to ${license} license]: https://opensource.org/licenses/${license}`;
    }
}
//create section for license
//this is not the function this is a tribute
function licenseSection(license){
    if (license) {
        return ` ##Licensing
                ${createLicenseBadge(license)}
                ${createLicenseLink(license)} 
                `
    }
}

module.exports = templateData => {
    console.log(templateData);
  
    return `
    # ${templateData.name}
## Description
${templateData.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License Information](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${templateData.installation}
## Usage
${templateData.usage}
## Contribution
${templateData.contributing}
## Tests
${templateData.testing}
## Languages#
${templateData.languages}

## Links
${templateData.githubLink} - 
${templateData.deployedLink}
## Questions
For further questions, please contact me at: [GitHub]('https://github.com/'${templateData.username}) or ${templateData.email}
    `;
  };
