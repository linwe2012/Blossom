const wxPromise = {
  signin: function () {
    return new Promise((resolve, reject) => {
      wx.login({
        success: resolve,
        fail: reject
      })
    })
  },
  post: function (url, params) {
    return new Promise((resolve, reject) => {
      if(!params){
        params = url[1]
        url = url[0]
      }
      wx.request({
        url: url,
        method: 'post',
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: params,
        success: resolve,
        fail: reject,
      })
    })
  },
  writeStorage: function (key, data) {
    return new Promise((resolve, reject)=>{
      wx.setStorage({
        key: key,
        data: data,
        success: resolve,
        fail: reject
      })
    })
  },
  readStorage: function (key) {
    return new Promise((resolve, reject) => {
      wx.getStorage({
        key: key,
        success: function (res) {
          resolve(res.data)
        },
        fail: function (e) {
          reject(e)
        }
      })
    })
  },
}
module.exports = wxPromise
