Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipment:{}
  },
  mydelete:function(e)
  {
    var that = this
    wx.request({
      url: 'http://192.168.1.115:8004/Equipment/deleteOne/' + that.data.equipment.id,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success(res) {
        //console.log(res.data)
      },
      fail(err) {
        console.log(err)
      }
    })
    wx.redirectTo({
      url: '/pages/find/find',
    })
  },
  mytest: function(e){
    var that = this
    
    //console.log(e.detail.value)
    
    wx.request({
      url: 'http://192.168.1.115:8004/Equipment/modifyOne/' + that.data.equipment.id,
      method: 'POST',
      data: {
        "name": e.detail.value.name,
        "model": e.detail.value.model,
        "cpu": e.detail.value.cpu,
        "memory": e.detail.value.memory,
        "application": e.detail.value.application,
        "state": e.detail.value.state
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success(res) {
        console.log(res.data)
      },
      fail(err) {
        console.log(err)
      }
    })
    wx.redirectTo({
      url: '/pages/find/find',
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this;
    console.log(option)
    that.setData({
      equipment:option
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})