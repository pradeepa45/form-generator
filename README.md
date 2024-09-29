# Form Generator

Form Generator is a React-based web application for creating and managing forms.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How to Use](#how-to-use)
- [Scripts](#scripts)
- [Important Packages](#important-packages)
- [Development](#development)
- [Deployment](#deployment)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd form-generator
npm install
```

## Usage

To run the application in development mode:

```bash
npm start
```

This will start the development server. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## How to Use

Follow these steps to create a form using the Form Generator:

1. Select an input type:

   - Choose one of the four types of input from the dropdown menu in the top left corner.

2. Fill in the necessary information:

   - For text input:

     - Enter the label and placeholder text.
     - Select input attributes (you can choose more than one):
       - Required
       - Disabled
       - Numbers only
       - Password
       - Multi-line input
     - Choose input validation (single option):
       - Text (default)
       - Email
       - Phone number

   - For select/checkbox/radio inputs:
     - Enter the title.
     - Enter option labels.
     - You can add more options or delete added ones.

3. Save the input:

   - Click on the 'Save this' CTA (Call to Action) button below the input configuration.

4. Preview and edit:
   - On the right side of the screen, you can preview how your form looks.
   - You can switch to the JSON config tab to view the JSON configuration of your current form.

Repeat these steps to add more inputs to your form as needed.

## Scripts

The following npm scripts are available:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner in interactive watch mode
- `npm run build`: Builds the app for production to the `build` folder
- `npm run eject`: Removes the single build dependency from your project
- `npm run predeploy`: Runs before `deploy` and builds the project
- `npm run deploy`: Deploys the application to GitHub Pages

## Important Packages

This project uses several important packages:

- **React**: A JavaScript library for building user interfaces
- **Material-UI**: A popular React UI framework
  - `@mui/material`: Core Material-UI components
  - `@mui/icons-material`: Material-UI icons
- **lodash**: A modern JavaScript utility library

## Development

This project was bootstrapped with Create React App. It uses React 18 and includes testing utilities from the @testing-library family.

The project is set up with ESLint for code linting, extending the default Create React App configuration.

## Deployment

This project is configured for deployment to GitHub Pages. The deployment process is as follows:

1. Run `npm run predeploy` to build the project
2. Run `npm run deploy` to deploy the built files to the gh-pages branch

The application will be deployed to: https://pradeepa45.github.io/form-generator

Note: Make sure your repository is configured for GitHub Pages deployment.

## Browser Support

For production environments, this project supports browsers with usage of >0.2%, excluding dead browsers and Opera Mini.

For development, it uses the latest versions of Chrome, Firefox, and Safari.
