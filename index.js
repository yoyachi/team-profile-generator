const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Engineer");
const Manager = require("./lib/Manager");

const employees = [];

function initApp() {
    startHtml();
    addMember();
}

function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name,",
        name: "name"
    },
    {
        type: "list",
        message:"Select team member's role",
        choices: [
        "Intern",
        "Manager"
    ],
    name: "role"
    },

    {
        message: "Enter team member's id",
        name: "email"
    }])
    .then(function({name, role, id, email})) {
        let roleInfo = ""
    }
}