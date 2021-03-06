// pages/IntermediateCheck/IntermediateCheck.js
const app = getApp()
Page({

  data: {

  },

  onLoad: function (options) {

  },

  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  InterCheckRegister(e) {
    if (e.detail.value.object == "" ||
      e.detail.value.date == "" ||
      e.detail.value.content == "" ||
      e.detail.value.personInCharge == "") {
      console.log("message error")
      console.log(e.detail.value.object)
      console.log(e.detail.value.content)
      console.log(e.detail.value.date)
      console.log(e.detail.value.personInCharge)
    }
    else {
      let url = app.globalData.url + 'cma/IntermediateChecksPlan/addOne'
      let data = {
        "object": e.detail.value.object,
        "content": e.detail.value.content,
        "checkDate": e.detail.value.date,
        "personInCharge": e.detail.value.personInCharge
      }
      console.log(url)
      console.log(data)
      app.wxRequest(url, 'POST', data, (res) => {
        console.log('send intermediate check message successfully')
        console.log(res)
        console.log(res.msg)
        console.log(res.code)
      }, (err) => {
        console.log('fail intermediate check register')
      })
    }
  }
})