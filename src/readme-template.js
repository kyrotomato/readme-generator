module.exports = templateData => {
    console.log(templateData);
  
    return `
    # ${data.title}
## Description
${templateData.name}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License Information](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${templateData.install}
## Usage
${templateData.usage}
${renderLicenseSection(data.license)}
## Contribution
${templateData.contributions}
## Tests
${templateData.testing}
## Questions
For further questions, please contact me at: [GitHub]('https://github.com/'${templateData.username}) or ${templateData.email}
    `;
  };