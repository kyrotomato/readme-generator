const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/readme-template');



const promptReadme = readmeData => {
  console.log(`

Generate your readme!

`);

  // If there's no 'projects' array property, create one
  if (!readmeData) {
    readmeData = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a project name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are your installation steps?',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter installation steps!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage for your application?',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('You need to enter usage steps!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Who are your contributers for this project?',
        validate: contributersInput => {
          if (contributersInput) {
            return true;
          } else {
            console.log('You need to enter contributers! If none enter none');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Who are your contributers for this project?',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('You need to enter contributers! If none enter none');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: gitlinkInput => {
          if (gitlinkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the deployed link to your project. (Required)',
        validate: deployedlinkInput => {
          if (deployedlinkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },

    ])
    // .then(readmeData => {
    //   readmeData.readme.push(readmeData);
    //   if (readmeData.confirmAddReadme) {
    //     return promptReadme(readmeData);
    //   } else {
    //     return readmeData;
    //   }
    //});
};

promptReadme()
  .then(readmeData => {
    const pageHTML = generatePage(readmeData);

     fs.writeFile('./readme.md', pageMD, err => {
       if (err) throw new Error(err);

       console.log('Page created! Check out readme.md in this directory to see it!');
     });
  });
