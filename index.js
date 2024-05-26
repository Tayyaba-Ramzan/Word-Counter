#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        message: "Enter a Sentence to count the word:",
        type: "input",
        name: "Sentence"
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(chalk.green(words));
console.log(chalk.yellow(`Your Sentence word count is ${words.length}`));
//                         XXXXXXXXXXXXXXXXXXXXXXXXX
