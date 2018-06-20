/**
 * Created by zhangbohan on 18/6/20.
 */
import request from '~/service'

export const actions = {
  getListByLastTime: async(store, params) => {
    return await request.get('/api/list', params)
  },
  getTable: async(store, {page = 1, limit = 20}) => {
    return await request.get('/api/table', {page, limit})
  },
  getWhiteList: async(store, {start = 0, length = 20}) => {
    return await request.post('/api/system/whitelist/list', {start, length})
  },
  getTodoList: async(store, params) => {
    return await request.get('/api/todolist', params)
  }
}

export const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
}
