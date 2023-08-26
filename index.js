// Packages/objects needed
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require('./lib/shapes');

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
  },
];

// Function to initialize app
function init() {
  inquirer.prompt(prompts).then((response) => {
    console.log(response);
// Creates userShape variable
    let userShape;
// For loop to determine which shape to render based on object selection
    if (response.shape === 'Circle'){
        userShape = new Circle(response.name, response.textColor, response.shapeColor)
    }
    else if( response.shape === 'Triangle'){
        userShape = new Triangle(response.name, response.textColor, response.shapeColor)
    }else{
        userShape = new Square(response.name, response.textColor, response.shapeColor)
    }
// Function used to create svg file
    fs.writeFile('./dist/logo.svg', userShape.render(), (err, result)=> {
        if(err)throw err;
        console.log('shape svg has been created');
    })
  });
}
// Call initialization function
init();
