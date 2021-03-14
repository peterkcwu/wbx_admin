const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const rankData = [
  {
    staff_name: '张三', // 姓名
    rank_num: 4, // 排名
    visit_count: 1, // 来访总数
    measure_count: 3, // 量房总数
    design_count: 3 // 设计总数
  },
  {
    staff_name: '李四', // 姓名
    rank_num: 1, // 排名
    visit_count: 1, // 来访总数
    measure_count: 3, // 量房总数
    design_count: 3 // 设计总数
  }
]

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/vue-admin-template/rank/list',
    type: 'get', // 必须和你接口定义的类型一样
    response: (req, res) => {
      // 返回的结果
      // req and res detail see
      // https://expressjs.com/zh-cn/api.html#req
      return {
        result_code: 0,
        msg: 'success',
        code: 20000,
        data: rankData
      }
    }
  }
]
