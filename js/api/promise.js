define(['api/api'], (api) => {
  const action = {}
  // 登陆
  action.REQ_login = (data) =>{
    return new Promise((resolve, reject) => {
      api.login(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

  // 获取TOKEN
  action.REQ_getToken = () => {
    return new Promise((resolve, reject) => {
      api.getToken().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

   // 登陆2
   action.REQ_login2 = (data) =>{
    return new Promise((resolve, reject) => {
      api.login2(data).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

   // 获取TOKEN2
   action.REQ_getToken2 = () => {
    return new Promise((resolve, reject) => {
      api.getToken2().then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }

  return action
})