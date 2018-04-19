define(['script/fetch', 'script/cors', 'script/ajax'], (fetch, cors, ajax) => {
  const env = 'development'
  const hosts = {
    development: 'http://api.yixiu08.com/well'
  }

  function LongURL(url) {
    return `${hosts[env]}${url}`
  }
  const api = {}
  api.login = (data) => {
    return cors({
      url: LongURL('/Util/login'),
      method: 'POST',
      data
    })
  }

  api.getToken = () => {
    return cors({
      url: LongURL('/Medal/imageUploadToken'),
      method: 'GET'
    })
  }

  api.login2 = (data) => {
    return ajax({
      url: LongURL('/Util/login'),
      method: 'POST',
      data
    })
  }

  api.getToken2 = () => {
    return ajax({
      url: LongURL('/Medal/imageUploadToken'),
      method: 'GET'
    })
  }

  return api
})