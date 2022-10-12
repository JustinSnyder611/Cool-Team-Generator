const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'name1',
            },
            {
                type: 'input',
                message: "What is the team manager's employee ID?",
                name: 'id1',
            },
            {
                type: 'input',
                message: "What is the team manager's email address?",
                name: 'email1',
            },
            {
                type: 'input',
                message: "What is the team manager's Office Number?",
                name: 'officeNum1',
            },
            {
                type: 'list', 
                message: "What do you want to do next?",
                name: 'choice1',
                choices: ['Add a Engineer', 'Add a Intern', 'Finish my Team']
            },
            {
                type: 'input',
                message: "What is the Engineer's name?",
                name: 'name2',
            },
            {
                type: 'input',
                message: "What is the Engineer's id?",
                name: 'id2',
            },
            {
                type: 'input',
                message: "What is the Engineer's email?",
                name: 'email2',
            },
            {
                type: 'input',
                message: "What is the Engineer's Github?",
                name: 'github2',
            },
            {
                type: 'list', 
                message: "What do you want to do next?",
                name: 'choice2',
                choices: ['Add a Engineer', 'Add a Intern', 'Finish my Team']
            },
            {
                type: 'input',
                message: "What is the Intern's name?",
                name: 'name3',
            },
            {
                type: 'input',
                message: "What is the Intern's id?",
                name: 'id3',
            },
            {
                type: 'input',
                message: "What is the Intern's email?",
                name: 'email3',
            },
            {
                type: 'input',
                message: "What is the Intern's School?",
                name: 'school3',
            },

])
.then((data) => {
    const htmlContent = generateHTML(data);
    fs.writeFile('gerneratedHTML.html', htmlContent, 
        (err) => err ? console.log(err): console.log('File was created!')) 
})]

function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
        <title>My Cool Team</title>
        <style>
            header {
                background-color: red;
            }
            h1 {
                text-align: center;
                color: white;
                height: 200px;
                position: relative;
                top: 70px;
            }
            * {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>    
    
        <div class="row">
            <div class="col container my-3 bg-primary text-white p-3">
                <h2>${data.name1}</h2>
                <h2>Manager</h2>
                <p>${data.id1}</p>
                <a href="${data.email1}">${data.email1}</a>
                <p>${data.officeNum1}</p>
            </div>
        </div>
        <div class="row">
            <div class="col container my-3 bg-primary text-white p-3">
                <h2>${data.name2}</h2>
                <h2>${data.choice1}</h2>
                <p>${data.id2}</p>
                <a href="${data.email2}">${data.email2}</a>
                <a href="${data.github2}">${data.github2}</a>
            </div>
            <div class="col container my-3 bg-primary text-white">
                <h2>${data.name3}</h2>
                <h2>${data.choice2}</h2>
                <p>${data.id3}</p>
                <a href="${data.email3}">${data.email3}</a>
                <p>${data.school3}</p>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="./assets/javascript/script.js"></script>
    </body>
    </html>`
}