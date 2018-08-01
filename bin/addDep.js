const yargs = require('yargs')
const {argv} = yargs
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const rootPath = path.resolve(__dirname,'..')
const childProcess = require('child_process')

inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'))

const {index,npmModule,version} = argv
const boilerplateFolder = path.resolve(rootPath,'boilerplate')

if(!index){
    const result = fs.readdirSync(boilerplateFolder).filter((ele)=>{
        return !ele.startsWith('.')
    })
}
const templateFolder = path.resolve(boilerplateFolder,String(index))
const path2 = path.resolve(templateFolder,'package.json')
const versionRecent = childProcess.execSync(`
    npm view ${npmModule} version
`,{
    encoding:'utf8'
}).trim()
const package = require(path2)

package.dependencies[npmModule] = `^${versionRecent}`
fs.writeFileSync(path2,JSON.stringify(package,null,2))

console.log('end')




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
