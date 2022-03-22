import fs from 'fs'
import path from 'path'

const prettierrc = path.join(__dirname, '.prettierrc')

module.exports = JSON.parse(fs.readFileSync(prettierrc))
