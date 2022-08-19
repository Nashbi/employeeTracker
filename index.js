// Including packages needed to produce this work
const fs = require('fs');
const path = require('path');
var inquirer = require('inquirer');

//Questions for management 

const databaseQuestion = () => { 
    inquirer.prompt ( [

{
    type: "list",
    message: "What would you like to do?",
    name: "Selecting a task",
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
},  
]).then(data => {

    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }

    
})};






databaseQuestion();
