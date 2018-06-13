import request from '~/service'



export const getListByLastTime = async (store, params) => {
  return await request.get('/api/list', params)
}


export const getTable = async (store, params) => {
  return await request.get('/api/table', params)
}


export const getTodoList = async (store, params) => {
  return await request.get('/api/todolist', params)
}
