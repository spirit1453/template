// @flow

const yargs = require('yargs')
const {argv} = yargs
const {index} = argv
const path = require('path')
const rootPath = path.resolve(__dirname,'../')
const exampleFolder = path.resolve(rootPath,'example')
const indexFolder = path.resolve(exampleFolder,index)

fse.ensureDirSync(indexFolder)
