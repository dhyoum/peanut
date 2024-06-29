import axios from 'axios'

export default {
  getInfo: function () {
    return axios.get('/rest/info')
  },
  postInfo: function (value) {
    return axios.post('/rest/info', value)
  },
  getResults: function (offset, limit) {
    return axios.post('/rest/api/results', {
      Type: 'results',
      Table: 'tests',
      Offset: offset,
      Limit: limit
    })
  }
}
