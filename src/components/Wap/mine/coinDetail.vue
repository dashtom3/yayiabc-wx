<template>
  <div>
    <!--选择钱币类型开始-->
    <ul class="coinDetail_box">
      <li>
        <span>选择乾币类型</span>
        <span class="coinClass">(&nbsp;注:&nbsp;&nbsp;1乾币=1元购买力&nbsp;)</span>
      </li>
      <!--1枚起购-->
      <li @click="select_1" :class="{'selectCoin': selectCoinShow == 1}">
      <img class="coinMoney2_img" src="../../../images/mine/coinMoney955.png" alt="img">
      <span>1枚起购&nbsp;&nbsp;(&nbsp;1枚乾币售价:&nbsp;0.95元&nbsp;)</span>
      <img v-show="selectCoinShow == 1" class="yes_img" src="../../../images/mine/yes.png" alt="">
      </li>
      <!--3000枚起购-->
      <li @click="select_3000" :class="{'selectCoin': selectCoinShow == 3000}">
        <img class="coinMoney2_img" src="../../../images/mine/coinMoney99.png" alt="img">
        <span>2000枚起购&nbsp;&nbsp;(&nbsp;1枚乾币售价:&nbsp;0.9元&nbsp;)</span>
        <img v-show="selectCoinShow == 3000" class="yes_img" src="../../../images/mine/yes.png" alt="">
      </li>
      <!--12000枚起购-->
      <li  @click="select_12000" :class="{'selectCoin': selectCoinShow == 12000}">
        <img class="coinMoney2_img" src="../../../images/mine/coinMoney88.png" alt="img">
        <span>5000枚起购&nbsp;&nbsp;(&nbsp;1枚乾币售价:&nbsp;0.8元&nbsp;)</span>
        <img v-show="selectCoinShow == 12000" class="yes_img" src="../../../images/mine/yes.png" alt="">
      </li>
    </ul>
    <!--选择钱币类型结束-->
    <!--充值个数开始-->
    <div class="payCoins">
      <span>充值的乾币数</span>
      <input  v-model="moneyCoins" type="tel" :placeholder="placeH">
    </div>
    <div class="payCoins">
      <span>实际支付金额</span>
      <span v-if="coin" class="payCoins_color">{{allprice}}</span>
      <span v-else class="payCoins_color">{{coinallprice}}</span>
    </div>
    <!--充值个数结束-->
    <!--支付方式开始-->
    <div class="payWay">
      <div class="payWay_font">
        支付方式
      </div>
<!--       <div @click="zfb_pay" class="payZFB">
        <img class="zfb_img" src="../../../images/mine/zhifubao.png" alt="">
        <span>支付宝</span>
        <img v-show="payShow" class="yesBlue" src="../../../images/mine/yesBlue.png" alt="">
      </div> -->
      <div @click="wx_pay" class="payZFB">
        <img class="wx_img" src="../../../images/mine/weixin.png" alt="">
        <span>微信支付</span>
        <img v-show="!payShow" class="yesBlue" src="../../../images/mine/yesBlue.png" alt="">
      </div>
    </div>
    <!--支付方式结束-->
    <!--立即支付开始-->
    <mu-raised-button label="立即支付" class="pay" @click="pay"/>
    <!--立即支付结束-->
    <!--末尾-->
  </div>
</template>

<script>
  import {tokenMethods} from '../../../vuex/util'
  import {Toast,Indicator} from 'mint-ui'
  export default {
    name: 'coinDetail',
    data(){
      return{
        moneyCoins: '',
        selectCoinShow : 1,
        payShow: false,
        amount : '',
        qbType : 'c_qb',
        kk: null,
        placeH: '请输入本次充值乾币个数',
        coin: true,
        coinallprice: '',
      }
    },
    watch:{
      moneyCoins:function (val, valold) {
        console.log(val);
        if(val < 2000)
        {
          this.selectCoinShow = 1
          this.qbType = 'c_qb'
        }else if(val >= 2000 && val < 5000)
        {
          this.selectCoinShow = 3000
          this.qbType = 'b_qb'
        }else if(val >= 5000)
        {
          this.selectCoinShow = 12000
          this.qbType = 'a_qb'
        }
        if( !new RegExp(/^[1-9]([0-9]*)$|^[0-9]$/).test(val))
        {
          this.moneyCoins = ''
        }
      }
    },
    computed:{
      allprice(){
        let reg = /^([1-9]\d{0,9}|0)$/;
        if(reg.test(this.moneyCoins))
        {
          if(this.selectCoinShow === 1)
          {
            this.amount = 0.95 * this.moneyCoins;
            return this.amount.toFixed(2)
          }
          else if(this.selectCoinShow === 3000)
          {
            if(this.moneyCoins >= 2000)
            {
              this.amount = 0.9 * this.moneyCoins;
              return this.amount.toFixed(2)
            }else {
              return '请输入大于2000的乾币数量'
            }
          }
          else if(this.selectCoinShow === 12000)
          {
            if(this.moneyCoins >= 5000)
            {
              this.amount = 0.8 * this.moneyCoins;
              return this.amount.toFixed(2)
            }else {
              return '请输入大于5000的乾币数量'
            }

          }
        }else {
          this.amount = 0;
          return this.amount
        }
      }
    },
    created: function() {
      var that = this
      if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
          document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
          document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
          document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
      } else {
        onBridgeReady();
      }
    },
    methods: {
      queryToArgs() {
        let query = window.location.search.substr(1),
          args = {}
        if (!query) return {}
        query.split('&').forEach(item => {
          let temp = item.split('=')
          args[temp[0]] = temp[1]
        })
        return args
      },
      pay(){
        var that = this
        //判断总价钱是否为0
        if(that.amount == 0) {
          Toast({message: '请输入正确的充值的数量', duration: 800})
          return;
        } else {
          if(that.payShow == true) {
            // 支付宝支付手机网站端
            // window.location.href = 'http://47.93.48.111:6181/api/pay/recharge' + '?token=' + tokenMethods.getWapToken() + '&qbNum=' + this.moneyCoins + '&qbType=' + this.qbType + '&computerOrPhone=phone'
            // let obj = {
            //   token: tokenMethods.getWapToken(),
            //   qbNum: this.moneyCoins,
            //   qbType: this.qbType,
            //   computerOrPhone: 'phone'
            // };
            // this.$store.dispatch('PAY_ZFB_COIN', obj).then((res) => {
            //   console.log(res,'opopo')
            //   window.location.href = res.request.responseURL
            // })
          } else {
            var wxUrl = 'http://wap.yayiabc.com/#/coinDetail'
            var data = {
              money: that.moneyCoins,
              amount: that.amount
            }
            // +encodeURI(wxUrl)+
            window.sessionStorage.setItem('wxCoin', JSON.stringify(data))
            window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4b1a6fde77626a32&redirect_uri=http%3A%2F%2Fwap.yayiabc.com%2F%23%2Fkong&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect"
          }
        }
      },
      wx_pay(){
        this.payShow = false
      },
      zfb_pay(){
        this.payShow = true
      },
      select_1(){
        this.selectCoinShow = 1;
        this.qbType = 'c_qb';
      },
      select_3000(){
        this.selectCoinShow = 3000;
        this.qbType = 'b_qb'
      },
      select_12000(){
        this.selectCoinShow = 12000;
        this.qbType = 'a_qb'
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/factory";
  .coinDetail_box {
    font-size: 3.73333vw;
    margin-top: px2vw(-15);
    width: 100vw;
    padding: 0 2.8vw;
    border-bottom: px2vw(20) solid #f4f4f4;
  }
  .coinDetail_box li{
    padding: px2vw(30) 0;
  }
  .coinDetail_box li:nth-child(1){
    background-color: white;
  }
  .coinDetail_box li:last-child{
    margin-bottom: px2vw(28);
  }
  .coinClass {
    color: #d81e06;
    font-size: 4vw;
  }

  .coinDetail_box li:nth-child(n+2){
    background-color: #f7f7f9;
  }
  .coinDetail_box li:nth-child(3){
    border-bottom: px2vw(1) solid $borderColor;
    border-top: px2vw(1) solid $borderColor;
  }
  .coinMoney2_img {
    margin-left: 2.78vw;
    vertical-align: middle;
    width: px2vw(36);
    height: px2vw(36);
  }

  .yes_img {
    float: right;
    width: px2vw(26);
    height: px2vw(21);
    margin-top: px2vw(14);
    margin-right: 2.7vw;
  }
  .selectCoin{
    background-color:#eeeeee !important;
  }

  .payCoins {
    font-size: 4.2666667vw;
    padding: px2vw(30) px2vw(20);
    border-bottom: px2vw(20) solid #f7f7f9;
  }
  .payCoins input{
    width: 42vw;
    padding-top: px2vw(7);
    float: right;
    border: none;
    font-size: 3.7333333vw;
    outline: none;
    text-align: right;
  }

  .payCoins_color {
    float: right;
    color: red;
  }

  .payWay {
    border-bottom: px2vw(20) solid #f7f7f9;
    margin-bottom: px2vw(90);
  }
  .payWay_font {
    font-size: 4.266667vw;
    padding: px2vw(30) px2vw(20) 0 px2vw(20);
  }

  .payZFB {
    padding: px2vw(30) px2vw(20);
  }
  .payZFB{
    font-size: 3.73333vw;
  }

  .zfb_img {
    vertical-align: middle;
    width: px2vw(40);
    height: px2vw(40);
    margin-right: px2vw(26);
  }
  .wx_img {
    vertical-align: middle;
    width: px2vw(47);
    height: px2vw(40);
    margin-right: px2vw(19);
  }

  .pay {
    display: block;
    font-size: 4.233333vw;
    width: 100vw;
    height: px2vw(90);
    position: fixed;
    bottom: 0;
    padding: px2vw(21) 0;
    background-color: $themeColor;
    text-align: center;
    color: white;
  }

  .yesBlue {
    float: right;
    margin-top: px2vw(15);
    width: px2vw(26);
    height: px2vw(21);
  }
</style>

