var fs = require('fs')
var path = require('path')
var testData = JSON.parse(fs.readFileSync(path.join(__dirname, '../demoData/passed.json')))
var checkJson = require(path.join(__dirname, '../src/components/Build/helpers.js'))

console.log(checkJson({ toto: 0 }))
// console.log(checkJson(testData))

