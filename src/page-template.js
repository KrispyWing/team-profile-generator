//create manager card
const createManagerCard = function(manager) {
  return `
    <div class="col-4 mt-4">
      <div class="card">
        <div> class="card-header">
          <h3>${manager.name}</h3>
          <h4>Manager</h4>
        </div>

        <div class="card-body">
          <p class="">ID: ${manager.id}</p>
          <p class="">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p> class="">Office #: ${manager.officeNumber}</p>
        </div>
      </div>
    </div>
  `;
}

//create Engineer Card
const createEngineerCard = function(engineer) {
  return `
    <div class="col-4 mt-4">
      <div class="card">
        <div> class="card-header">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4>
        </div>

        <div class="card-body">
          <p class="">ID: ${engineer.id}</p>
          <p class="">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p> class="">Github:<a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
      </div>
    </div>
  `;
}

const createInternCard = function(intern) {
  return `
    <div class="col-4 mt-4">
      <div class="card">
        <div> class="card-header">
          <h3>${intern.name}</h3>
          <h4>Intern</h4>
        </div>

        <div class="card-body">
          <p class="">ID: ${intern.id}</p>
          <p class="">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
          <p class="">School: ${intern.school}</p>
        </div>
      </div>
    </div>
  `;
}

generateTeam = teamData => {
  cardArray = [];

  for (let i=0; i<teamData.length; i++) {
    const employee = teamData[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = createManagerCard(employee);
      cardArray.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = createEngineerCard(employee);
      cardArray.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = createInternCard(employee);
      cardArray.push(internCard);
    }
  }

  const teamCards = cardArray.join('');

  const generateTeamCards = generateTeamPage(teamCards);  
  return generateTeamCards;
}

const generateTeamPage = function(teamCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
                  <!--Team Cards-->
                  ${teamCards}
              </div>
          </div>
      </main>
      
  </body>
  </html>
`;
  
}

module.exports = generateTeam;

