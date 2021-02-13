const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const team = [];

function addManager() {
  inquirer
    .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your employee ID number:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter your office number:'
    }
  ])
  .then(function({name, id, email, officeNumber}) {
    const manager = new Manager(name, id, email, officeNumber);
    console.log(manager);
    team.push(manager);
    console.log(team);
    addTeamMember();
  })
  
};

function addTeamMember() {
  inquirer
    .prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What Role is the employee?',
      choices: ['Engineer', 'Intern']
    }
    ])
    .then(function(data) {
      switch (data.role) {
        case "Engineer":
          addEngineer();
          break;
        
        case "Intern":
          addIntern();
          break;
      }
    });
  };

function addEngineer() {
  inquirer
    .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your Engineers name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your Engineers ID number:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the Engineers email address:'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter the Engineers github username:'
    }
  ])
  .then(function({name, id, email, github}) {
    const engineer = new Engineer(name, id, email, github);
    console.log(engineer);
    team.push(engineer);
    console.log(team);
    addMore();
  })
};

function addIntern() {
  inquirer
    .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter your Interns name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your Interns ID number:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the Interns email address:'
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the Interns School:'
    }
  ])
  .then(function({name, id, email, school}) {
    const intern = new Intern(name, id, email, school);
    console.log(intern);
    team.push(intern);
    console.log(team);
    addMore();
  })
};

function addMore() {
  inquirer.prompt([
    {
      type: 'confirm',
      name: 'addmore',
      message: 'Would you like to add another team member?'
    }
  ])
  .then(function({ addmore }) {
    if (addmore) {
      addTeamMember();
    } else {
      return; // create page function will get called here
    }
  })
}
    

addManager()


