const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

function addManager() {
  inquirer
    .prompt([
    {
      type: 'text',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'text',
      name: 'id',
      message: 'Enter your employee ID number:'
    },
    {
      type: 'text',
      name: 'email',
      message: 'Enter your email address:'
    },
    {
      type: 'text',
      name: 'officeNumber',
      message: 'Enter your office number:'
    }
  ])
  .then(function({name, id, email, officeNumber}) {
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    team.push(manager);
    console.log(team);
  })  
  
};

addManager();

