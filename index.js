// Package needed 
const inquirer = require("inquirer");
const fs = require('fs');

// Array of prompts
const prompts = [
    {
    type: "input",
    message: "Enter three characters:",
    name: "name",
    },
    {
    type: "input",
    message: "What is your text color? (Use color name or HEX)",
    name: "textColor",
    },
    {
    type: "list",
    message: "Choose a shape:",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"], 
    },
    {
    type: "input",
    message: "What is your shape color? (Use color name or HEX)",
    name: "shapeColor",
    }
];

// Function to create SVG file
function writeToFile(fileName, data){
    const svgFileContent = generateSVG(data);

    fs.writeFile(fileName, svgFileContent, (err) =>
      err ? console.log(err) : console.log("Successfully created SVG file!")
  );
};

// Function to initialize app
function init(){
    inquirer
    .prompt(prompts)
    .then((response) => {
    console.log(response)
    writeToFile(`${data.title}.svg`, response)
    });
}


