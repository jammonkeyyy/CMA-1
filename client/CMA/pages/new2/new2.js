Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  newEquipment:function(e)
  {
    console.log(e.detail.value)
    wx.request({
      url: 'http://192.168.1.113:8004/EquipmentReceive/add',
      method: 'POST',
      data:{
        "name": e.detail.value.name,
        "model": e.detail.value.model,
        "manufacturer": e.detail.value.manufacturer,
        "receive_situation": e.detail.value.receive_situation,
        "recipient": e.detail.value.recipient,
        "receive_date": e.detail.value.receive_date,
        "equipment_situation": e.detail.value.equipment_situation,
        "acceptance": e.detail.value.acceptance,
        "acceptance_person": e.detail.value.acceptance_person,
        "acceptance_date": e.detail.value.acceptance_date
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      success(res) {
        console.log("add")
        console.log(res)
      },
      fail(err) {
        console.log(err)
      }
    })
    wx.redirectTo({
      url: '/pages/find2/find2',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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