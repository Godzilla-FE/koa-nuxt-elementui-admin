import request from '~/service'



export const getListByLastTime = async (store, params) => {
  return await request.get('/api/list', params)
}


export const getTable = async (store, {page=1,limit=20}) => {
  return await request.get('/api/table', {page,limit})
}


export const getTodoList = async (store, params) => {
  return await request.get('/api/todolist', params)
}


export const getWhiteList = async (store, {start=0,length=20}) => {
  return await request.post('/api/system/whitelist/list', {start,length})
}
