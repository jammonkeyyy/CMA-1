// pages/IntermediateChecksRecord/IntermediateChecksRecord.js
const app = getApp()
Page({

  data: {
    "mess": null,
    "temp":
      [{
        "recordId":5,
        "planId": 1,
        "object": "路由器",
        "checkDate": "2018-03-04",
        "processRecord":"xxxxx",
        "processRecordPerson":"zhang",
        "processRecordDate":"2018-03-05",
        "resultRecord":"ok",
        "resultRecordPerson":"li",
        "resultRecordDate":"2018-05-11",
        "note":"aaaa"
      },
      {
        "recordId": 5,
        "planId": 1,
        "object": "路由器",
        "checkDate": "2018-03-04",
        "processRecord": "xxxxx",
        "processRecordPerson": "zhang",
        "processRecordDate": "2018-03-05",
        "resultRecord": "ok",
        "resultRecordPerson": "li",
        "resultRecordDate": "2018-05-11",
        "note": "aaaa"
      }]
  },

  onLoad: function (options) {
    
  },

  onShow: function (options){
    let url = app.globalData.url + 'cma/IntermediateChecksRecord/getAll'
    let postdata = ''
    console.log(url)
    console.log(postdata)
    app.wxRequest(url, 'GET', postdata, (res) => {
      console.log('record getall success')
      this.setData({
        mess: res.data
      })
      console.log(this.mess)
    }, (err) => {
      console.err('getone error')
    })
  },

  gotoAdd(e) {
    wx.navigateTo({
      url: 'IntermediateChecksRecordAddone/IntermediateChecksRecordAddone',
    })
  },

  gotoOne(e) {
    console.log(e)
    let target = e.currentTarget.id
    console.log('getone id')
    console.log(target)
    wx.navigateTo({
      url: 'IntermediateChecksRecordGetone/IntermediateChecksRecordGetone?id=' + target
    })
  }
})