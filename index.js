// TODO: Include packages needed for this application
const inquirer=require("inquirer");
const generateMarkdown= require("./utils/generateMarkdown");
const fs= require("fs");
// TODO: Create an array of q;uestions for user input
const questions = [
    {
        message: "What is the title of your project?",
        name: "Title",
    },
    {
        message: "Describe your project.",
        name: "Description",
    },
    {
        message: "How do you install your project?",
        name: "Installation",
    },
    {
        message: "How are you going to test your project?",
        name: "Testing",
    },
    {
        message: "How can others contribute to your project?",
        name: "Contributing",
    },
    {
        message: "What contact information would you like to share?",
        name: "Contact",
    },
    {
        message: "Which license are you using for your project?",
        name: "License",
        type: "list",
        choices: [
            "Apache",
            "GNU",
            "MIT",

        ],

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(finish);
}
function finish(answers){
    const data= generateMarkdown(answers);
    writeToFile("./dist/readme.md",data);
    console.log("Thank you for using my app, your readme is in the dist folder.");
    process.exit();
}

// Function call to initialize app
init();
