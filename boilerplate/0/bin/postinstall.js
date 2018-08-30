const {ModuleUtil} = require('@ys/collection')
const {installGit} = ModuleUtil
const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const { createLogger, format, transports } = require('winston')
const { combine, timestamp, prettyPrint } = format
const logFolder = path.resolve(rootPath, 'local/log')
const fse = require('fs-extra')
fse.ensureDirSync(logFolder)
const errorLog = path.resolve(logFolder, 'error.log')
const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    prettyPrint()
  ),
  transports: [
    new transports.File({ filename: errorLog, level: 'error' })
  ]
})
;(async () => {
  await installGit(path.resolve(rootPath, 'package.json'))
})().catch((err) => {
  logger.error(err)
})
