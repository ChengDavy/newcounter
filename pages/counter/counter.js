var aT = "全费用:"
var cT = "纯费用:"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phonecall:"13213110593",
    allText:aT,
    cunText:cT,
    jjp: 0.00,
    ccp: 0.00,
    syp: 0.00,
    jjc: 0.00,
    ccc: 0.00,
    syc: 0.00


  },
  jjpinput: function(e){
    this.setData({
      // jjp:e.detail.value
      jjp: parseFloat (e.detail.value)
    })
  },
  ccpinput: function (e) {
    this.setData({
      ccp: parseFloat(e.detail.value)
    })
  },
  sypinput: function (e) {
    this.setData({
      syp: parseFloat(e.detail.value)
    })
  },
  jjcinput: function (e) {
    this.setData({
      jjc: parseFloat(e.detail.value)
    })
  },
  cccinput: function (e) {
    this.setData({
      ccc: parseFloat(e.detail.value)
    })
  },
  sycinput: function (e) {
    this.setData({
      syc: parseFloat(e.detail.value)
    })
  },

  counter: function(){
    // var jjpV: parseFloat(this.data.jjp)
    var allP = this.data.jjp + this.data.ccp + this.data.syp

    var jjpd = this.data.jjp - this.data.jjp / 1.06 / 100 * this.data.jjc

    var ccpd = this.data.ccp - this.data.ccp / 100 * this.data.ccc

    var sypd = this.data.syp - this.data.syp / 1.06 / 100 * this.data.syc

    var cunpd = jjpd + ccpd + sypd

    jjpd = jjpd.toFixed(2)

    ccpd = ccpd.toFixed(2)

    sypd = sypd.toFixed(2)

    cunpd = cunpd.toFixed(2)

    this.setData({

      allText: aT + "  " + this.data.jjp + "+" + this.data.ccp + "+" + this.data.syp + "=" + allP,

      cunText: cT + "  " + jjpd + "+" + ccpd + "+" + sypd + "=" +cunpd

    })

  },

  callMe: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phonecall,
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