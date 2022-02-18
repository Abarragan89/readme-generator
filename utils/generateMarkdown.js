// creates license badge and link dependent on user info
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU AGPLv3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GNU LGPLv3':
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'The Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    default:
      return '';
  }
}

// Generates MarkDown with user data
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Tables of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Tests](#tests)
  5. [License](#license)
  6. [Questions](#questions)
  ## Installation
  To install the necessary dependencies, run the following command.
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage
  ${data.usage} [How To Video](${data.video})
  ## Contribution
  ${data.contribution}
  ## Tests
  \`\`\`
  ${data.tests}
  \`\`\`
  ## License 
  This applicaiton is licensed under the ${data.license} license.
  ## Questions
  If you have any questions:\n
  [GitHub Acccount](https://github.com/${data.github})\n
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
