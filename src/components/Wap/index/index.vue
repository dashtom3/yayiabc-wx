<template>
  <div class="index">
    <div class="search_box">
<!--       <img class="book_menu" src="../../../images/index/book.png" @click="book_up" alt="img"> -->
      <input class="search_word" type="text" @focus="searchActive" @keyup.enter="search_cargo" v-model="searchCargo" autocomplete="on" placeholder="请输入关键字">
      <img class="search_img" src="../../../images/index/search.png" alt="img">
    </div>
    <!--  左侧按钮弹出 开始 -->
<!--     <mt-popup v-model="popupVisible" position="left">
      <div class="book_up_box">
        <div class="classify_item" v-for="item in $store.state.index.classifyList" @click="goToList(item)">{{item.oneClassify}}</div>  
      </div>
    </mt-popup> -->
    <!--  左侧按钮弹出 结束 -->
    <Carousel></Carousel>
    <mainEnter></mainEnter>
    <classifyBox></classifyBox>
    <!-- 注册成功弹出该蒙层 -->
    <div class="redPacketWrapper" v-show="isShow">
      <img class="redPacket" src="../../../images/index/redPacket.png">
      <div class="btn-use" @click.stop="useRedPacket"></div>
      <img class="close" src="../../../images/index/close.png" @click.stop="hideRedPacket">
    </div>
<!--     <Brand></Brand>
    <Classify></Classify> -->
  </div>
</template>

<script>
import Carousel from './carousel'
import mainEnter from './mainEnter'
import classifyBox from './classifyBox'
import Brand from './brand'
import Classify from './classify'
export default {
  name: 'index',
  data () {
    return {
      popupVisible: false,
      searchCargo: '',
      isShow: false
    }
  },
  components: {
    Carousel,
    mainEnter,
    classifyBox,
    Brand,
    Classify
  },
  created: function() {
    var that = this
    that.$store.dispatch('GET_CLASSIFY_QUERY')
    that.$emit('listenToChildEvent','index')
    if (this.$route.params.redPacket === true) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  },
  methods: {
    //左侧弹出框
    book_up: function() {
      var that = this
      that.popupVisible = true
    },
    //搜索框
    search_cargo: function() {
      var that = this
    },
    //去商品列表页
    goToList: function(item) {
      var that = this
      that.$router.push({ name: 'productsList', params: { oneClassify: item.oneClassify, twoClassify: '', threeClassify: ''}})
    },
    searchActive: function() {
      var that = this
      that.$router.push({ path: '/searchWord', query: { data: 'focus' }})
    },
    useRedPacket() {
      this.isShow = false;
      this.$router.push({path: '/productList'})
    },
    hideRedPacket() {
      this.isShow = false;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../../common/sass/factory";
.index {
  width: 100vw;
}
.book_menu {
  position: absolute;
  top: 4.3vw;
  left: 2vw;
  width: 5.4vw;
  height: 3.2vw;
}
.top_word {
  font-size: 4.615vw;
  text-align: center;
}
.book_up_box {
  width: 70vw;
  height: 100vh;
  background-color: #fff;
  z-index: 999;
}
.classify_item {
  text-align: center;
  width: 100%;
  height: 13.866vw;
  line-height: 13.866vw;
  border-bottom: 1px solid #e9e9e9;
}
.search_box {
  width: 100vw;
  height: px2vw(88);
  position: relative;
  background-color: $themeColor;
}
.search_word {
  width: px2vw(710);
  height: px2vw(64);
  line-height: px2vw(64);
  margin: 0 auto;
  border: 1px solid #e9e9e9;
  border-radius: px2vw(28);
  background-color: #fff;
  outline: medium;
  padding-left: 10vw;
  margin-left: px2vw(20);
  margin-top: px2vw(13);
}
.search_img {
  width: 4.75vw;
  height: 4.75vw;
  position: absolute;
  top: 3.5vw;
  left: 6vw;
}
.redPacketWrapper{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, .2);
    z-index: 9999;
    .redPacket{
      position: absolute;
      top: px2vw(328);
      left: 50%;
      transform: translateX(-50%);
      width: px2vw(450);
      height: px2vw(576);
    }
    .btn-use{
      position: absolute;
      top: px2vw(789);
      left: 50%;
      transform: translateX(-50%);
      width: px2vw(236);
      height: px2vw(70);
    }
    .close{
      position: absolute;
      top: px2vw(947);
      left: 50%;
      transform: translateX(-50%);
      width: px2vw(60);
      height: px2vw(60);
    }
  }
</style>

