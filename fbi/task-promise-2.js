const isPositive = require('is-positive')
const utils = require('./utils')

module.exports = async () => {
  await utils.sleep(200)
  
  console.log(`task-promise-2 done. 1 is positive: ${isPositive(1)}`)
}
