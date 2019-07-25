'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API:'"http://member-h5.icloud.xstvos.cn"'
  BASE_API:'"http://usercenter.jx.icloud.xstvos.cn"'
})
