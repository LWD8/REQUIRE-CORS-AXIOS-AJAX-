define(() => {

  /**
   * 把Object 对象 转换成 formData格式
   * @param {object} data 发送数据内容
   * @return promise
   */
  const formData = (data) => {
    let ret = "";
    for (let it in data) {
      ret +=
        encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
    }
    return ret;
  }

  /**
   * cors 跨域请求接口
   * @param {object} data 发送请求体
   * @return promise
   */
  return (data) => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      if (data.method === 'GET') {
        let url = data.params ? `${data.url}?${formData(data.params)}` : data.url
        xhr.open(data.method, url, true);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('access-token', '19a05bfd5c67ce05729d297eecf7d17d');
        xhr.send(null);
        xhr.onload = function () {
          resolve(JSON.parse(this.response))
        }
      } else {
        xhr.open(data.method, data.url, true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        // xhr.setRequestHeader('access-token', '19a05bfd5c67ce05729d297eecf7d17d');
        xhr.send(formData(data.data));
        xhr.onload = function() {
          resolve(JSON.parse(this.response))
        }
      }
    })
  } 
})