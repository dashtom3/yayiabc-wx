<template>
  <div class="classifyIndex">
    <Search></Search>
    <classifyDes></classifyDes>
  </div>
</template>

<script>
import Search from './search'
import classifyDes from './classifyDes'
export default {
  name: 'classifyIndex',
  data () {
    return {
    }
  },
  components: {
    Search,
    classifyDes,
  },
  created: function() {
    var that = this
    //解决iOS退出‘展会推荐’不显示的问题
    window.scroll(1, 0)
    that.$emit('listenToChildEvent','classify')
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

