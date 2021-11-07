import request from '@/utils/request'

export function getPlayerPage(current, size) {
  return request({
    url: `/getInfo/${current}/${size}`,
    method: 'get'
  })
}

export function getOnePlayer(id) {
  return request({
    url: `/getDetail/${id}`,
    method: 'get'
  })
}

