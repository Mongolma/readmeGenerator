// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}
  # Table of contents

  -[Title] (#title)
  -[Description] (#description)
  -[Installation] (#installation)
  -[Usage] (#usage)
  -[License] (#license)
  -[Contribution] (#contribution)
  -[Authors] (#authors)
  -[Test] (#test)
  -[Email] (#email)

  ## Description:
  ![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
  ${response.description}
  ## Installation:
  ${response.installation}
  ## Usage:
  ${response.usage}
  ## Contribution:
  ${response.contribution}
  ## Author:
  ${response.authors}
  ## Test:
  ${response.test}
  ## License:
  For more information about the license, click on the link below
  [License](https://opensource.org/license-${response.license}-blue.svg "License Badge")

  ##Questions:
  For questions about the generator you can go to my GitHub page at the following link:

  -[Github Profile](https://github.com/${response.username})

  For additional questions please reach out to my email at: ${response.email}
`;
}

module.exports = { generateMarkdown };
