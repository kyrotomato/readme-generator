//create function for licenses
//badge

function createLicenseBadge(license) {
    if (license === 'None') {
        return '';
    }
    else if (license === 'Apache-2.0'){
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
    else {
        return ` [![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
    }
};
//link
//commented out to combine the link and the badge // no longer needed
// function createLicenseLink(license) {
//     if (license === 'None') {
//         return '';
//     }
//     else {
//         return `[Link to ${license}]: https://opensource.org/licenses/${license}`;
//     }
// }
//create section for license
//this is not the function this is a tribute
function licenseSection(license) {
    if (license === 'None') {
        return '';
    }
    else {
        return `## Licensing <br> ${createLicenseBadge(license)}
        `
    }
}

module.exports = templateData => {
    console.log(templateData);

    return `## ${templateData.name}
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
## Languages
${templateData.languages}

${licenseSection(templateData.license)}

## Links
${templateData.githubLink} - 
${templateData.deployedLink}
## Questions
For further questions, please contact me at: [GitHub]('https://github.com/'${templateData.githubUser}) or ${templateData.email}
    `;
};
