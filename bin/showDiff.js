const yargs = require('yargs')
const {argv} = yargs
const {_} = argv
//  /Users/spirit/entry/git/working_on/QuickTest/package.json /Users/spirit/entry/git/working_on/QuickTest/package2.json
const programCmd = "/Applications/WebStorm.app/Contents/MacOS/webstorm diff"
const childProcess = require('child_process')
const path = require('path')

const cwd = process.cwd()
const path1 = path.resolve(cwd,_[0])
const path2 = path.resolve(cwd,_[1])

childProcess.exec(`
    ${programCmd} ${path1} ${path2}
`)
