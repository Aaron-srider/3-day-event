import request from '@/utils/request'

export function getPlayerPage(current, size) {
  return request({
    url: '/players',
    method: 'get',
    params: {
      current,
      size
    }
  })
}

export function getOnePlayer(id) {
  return request({
    url: '/player',
    method: 'get',
    params: {
      id
    }
  })
}

