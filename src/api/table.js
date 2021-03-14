import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getRankList(params) {
  return request({
    url: '/vue-admin-template/rank/list',
    method: 'get',
    params
  })
}
