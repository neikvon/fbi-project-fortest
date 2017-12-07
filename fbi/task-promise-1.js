const isPositive = require('is-positive')
const utils = require('./utils')

module.exports = () => {
  const taskParams = ctx.task.getParams('task-promise-1')

  return utils.sleep(100).then(() => {
    console.log('task-promise-1 done')
    console.log(`1 is positive: ${isPositive(1)}`)
    console.log(`task param t is ${taskParams.t}`)
    console.log(`task param p is ${taskParams.p}`)
  })
}
