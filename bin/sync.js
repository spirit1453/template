const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const fs = require('fs')
const boilerplate = path.resolve(rootPath, 'boilerplate')
const {CliUtil} = require('@ys/vanilla')
const {info} = CliUtil

const defaultIgnore = fs.readFileSync(path.resolve(boilerplate, '0/.gitignore'), 'utf8')

fs.writeFileSync(path.resolve(boilerplate, '7/.gitignore'), defaultIgnore + `#nuxt
.nuxt`)

info(['all synced'])
