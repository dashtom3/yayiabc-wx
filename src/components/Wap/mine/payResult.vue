<template>
  <div>
    <div class="logIn_header">
      <div class="header_box" @click="back">
        <img class="header_back" src="../../../images/logIn/back.png" alt="img">
      </div>
      <span class="logWithCode">支付结果</span>
    </div>
    <div class="coinPaySuccess">
      <div>
        <img src="../../../images/mine/paySuccssed.png" alt="">
      </div>
      <div>
        乾币充值成功!
      </div>
    </div>
    <div class="moneys">
      <div class="money_num">
        <div>
          <div class="circle">
            <img src="../../../images/mine/circleBlue.png" alt="">
          </div>
          <span class="marginLeft">充值的乾币数</span>
          <span class="fontBlue">{{moneyCoins}}</span>
        </div>
        <div class="circle_top">
          <div class="circle">
            <img src="../../../images/mine/circleBlue.png" alt="">
          </div>
          <span class="marginLeft">实际支付金额</span>
          <span class="fontBlue">{{amount}}</span>
        </div>
      </div>

      <!--查看钱币明细-->
      <mu-raised-button label="查看钱币明细" class="watchDetail" @click="seeDetail"/>
    </div>

    <!--末尾-->
  </div>
</template>

<script>
  export default {
    name: 'payResult',
    data () {
      return {
        moneyCoins: '',
        amount: '',
      }
    },
    created: function() {
      var that = this
      var wxState = 2
      window.sessionStorage.setItem('wxState', JSON.stringify(wxState))
      if (that.$route.params.moneyCoins) {
        that.moneyCoins = that.$route.params.moneyCoins
        that.amount = that.$route.params.amount
      } else {
        that.$router.push({path: '/'})
    }
  },
  components: {
  },
  watch: {
  },
  methods: {
    seeDetail: function() {
      var that = this
      that.$router.push({path: '/exchangeDetail'})
    },
    back: function() {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  @import "../../../common/sass/factory";

  .header_top {
    height: px2vw(72);
    background-color: $themeColor;
  }
  .header{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80vw;
    height: 9.73333vw;
    line-height: 9.73333vw;
    display: inline-block;
    text-align: center;
    font-size: 4.26667vw;
    color: white;
  }
  .header_img {
    width: 2.4vw;
    height: 3.86667vw;
    margin-left: 2vw;
    margin-top: 3vw;
    float: left;
  }
  .coinPaySuccess{
    padding: px2vw(59) 11.5vw;
    text-align: center;
    font-size: 4.2666667vw;
    color: $themeColor;
  }
  .coinPaySuccess div:nth-child(2){
    margin-top: px2vw(15);
  }
  .coinPaySuccess img{
    width: px2vw(91);
    height: px2vw(83);
  }
  .money_num {
    font-size: 3.7333336vw;
    position: relative;
    padding: px2vw(44) 0 px2vw(54) 16.3vw ;
    background-color: #eefafb;
    border: 1px solid #d1f1f4;
  }

  .moneys {
    padding: 0 11.5vw;
  }

  .circle {
    margin-top: px2vw(-7);
    vertical-align: middle;
    display: inline-block;
    position: relative;
    width: px2vw(19);
    height: px2vw(19);
  }
  .circle img{
    position: absolute;
    top:px2vw(0);
    width: px2vw(19);
    height: px2vw(19);
  }

  .fontBlue {
    color: $themeColor;
  }

  .circle_top {
    margin-top: px2vw(36);
  }

  .marginLeft {
    margin-left: px2vw(30);
  }

  .watchDetail {
    display: block;
    margin-bottom: px2vw(30);
    box-shadow: 0 2px 10px $themeColor;
    margin-top: px2vw(80);
    width: 100%;
    height: px2vw(80);
    padding: px2vw(30) 0;
    text-align: center;
    color: white;
    font-size: 4.533333vw;
    background-color: $themeColor;
  }
</style>

