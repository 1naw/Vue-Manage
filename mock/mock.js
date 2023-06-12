const Mock = require('mockjs') // mockjs 导入依赖模块
const id = Mock.mock('@id') // 得到随机的id,字符串
console.log(Mock.mock('@id'), typeof id)

const obj = Mock.mock({
  id: '@id()', // 得到随机的id
  username: '@cname()' // 随机生成中文名字
})
console.log(obj)
