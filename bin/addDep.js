const yargs = require('yargs')
const {argv} = yargs
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const rootPath = path.resolve(__dirname,'..')

inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'))

const {index,npmModule,version} = argv

if(!index){
    const boilerplateFolder = path.resolve(rootPath,'boilerplate')
    const result = fs.readDirSync(boilerplateFolder)
    console.log(result)

}

// var fuzzy = require('fuzzy');
//
//
// var colors = ['red', 'green', 'blue', 'yellow'];
//
// inquirer.prompt([{
//     type: 'checkbox-plus',
//     name: 'colors',
//     message: 'Enter colors',
//     pageSize: 10,
//     highlight: true,
//     searchable: true,
//     default: ['yellow', 'red'],
//     source: function(answersSoFar, input) {
//
//         input = input || '';
//
//         return new Promise(function(resolve) {
//
//             var fuzzyResult = fuzzy.filter(input, colors);
//
//             var data = fuzzyResult.map(function(element) {
//                 return element.original;
//             });
//
//             resolve(data);
//
//         });
//
//     }
// }]).then(function(answers) {
//
//     console.log(answers.colors);
//
// });
