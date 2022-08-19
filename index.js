// Including packages needed to produce this work
const fs = require('fs');
const path = require('path');
var inquirer = require('inquirer');

//Questions for management 

const databaseQuestions = () => { 
    inquirer.prompt ( [

{
    type: "list",
    message: "What is the team manager's name?",
    name: "Manager Name",
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"]
},  
{
    type: "input",
    message: "What is the team manager's name?",
    name: "Manager Name",
}, 
{
    type: "input",
    message: "What is the manager's ID?",
    name: " Manager Employee ID",
}, 
{
    type: "input",
    message: "What is the manager's email address?",
    name: "Manager Email Address",
}, 
{
    type: "input",
    message: "What is the manager's office number?",
    name: " Manager Office number",
}, 

]).then(data => {
followUpQuestions();
})
};

//Follow up questions for students 

const followUpQuestions = () => {
    inquirer.prompt (
    [

    {
        type: "input",
        message: "What is the employee's name?",
        name: "Employee Email",
    }, 

    {
        type: "input",
        message: "What is the employee ID",
        name: "Employee ID",
    }, 

    {
        type: "input",
        message: "What is the employee github?",
        name: "Employee github",
    }, 

    {
        type: "input",
        message: "What is the team member's role",
        name: "Employee role",
    }, 

]).then(data => {
    followUpQuestions();


    
})};






databaseQuestions();
