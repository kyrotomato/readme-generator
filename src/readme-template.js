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
