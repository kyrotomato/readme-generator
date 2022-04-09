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
${renderLicenseSection(templateData.license)}
## Contribution
${templateData.contributing}
## Tests
${templateData.testing}
## Languages#
${templateData.languages}
## Links
${templateData.githubLink}
${templateData.deployedLink}
## Questions
For further questions, please contact me at: [GitHub]('https://github.com/'${templateData.username}) or ${templateData.email}
    `;
  };