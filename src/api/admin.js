import axios from '../axios'

export function fetchGames(page) {
  return axios({
    url: '/games',
    method: 'get',
    params: {
      page
    }
  })
}

export function createGame(data) {
  return axios({
    url: '/games',
    method: 'post',
    data
  })
}

export function deleteGame(id) {
  return axios({
    url: `/games/${id}`,
    method: 'delete'
  })
}

export function updateGame(id, data) {
  return axios({
    url: `/games/${id}`,
    method: 'put',
    data
  })
}
