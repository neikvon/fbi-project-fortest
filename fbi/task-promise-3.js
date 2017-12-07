const isPositive = require('is-positive')
const utils = require('./utils')

module.exports = () => {
  console.log(`task-promise-3 start. 1 is positive: ${isPositive(1)}`)
  return utils.sleep(300)
}
