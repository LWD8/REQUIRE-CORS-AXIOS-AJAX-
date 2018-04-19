define(['jquery'], ($) => {
  let ajax = (data) => {
    return new Promise((resolve, reject) => {
      if (data.method == 'GET') {

        $.ajax({
          url: data.url,
          data: data.params,
          type: data.method,
          beforeSend: (xhr) => {
            xhr.setRequestHeader("Test", "Chenxizhang");
        },
          success: (data,status,xhr) => {
            resolve(data)
          }})
      } else if (data.method == 'POST') {

        $.post(
          data.url,
          data.data,
          (data,status,xhr) => {
            resolve(data)
          })
      }
    })
  }

  return ajax
})