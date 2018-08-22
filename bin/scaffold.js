// @flow

const yargs = require('yargs')
const {argv} = yargs
const {index} = argv
const path = require('path')
const rootPath = path.resolve(__dirname,'../')
const boilerplateFolder = path.resolve(rootPath,'boilerplate')
const exampleFolder = path.resolve(rootPath,'example')
const fse = require('fs-extra')
const fs = require('fs')
const inquirer = require('inquirer')

const standard = {
    index:{
        type: 'list',
        message: 'which index of the template?',
        choices: fs.readdirSync(boilerplateFolder).filter(ele=>{
            return !ele.startsWith('.')
        }),
    }
}

const question = []

for(let key in standard){
    const value = standard[key]
    value.name = key
    question.push(value)
}

(async()=>{
    const answer = await inquirer.prompt(question)
    console.log(JSON.stringify(answer, null, '  '));
    const {index} = answer
    const source = path.resolve(boilerplateFolder,index)
    const destination = path.resolve(exampleFolder,index)

    fse.ensureDirSync(destination)
    if()
    fse.copySync(source,destination)
    console.log('end')

})()

