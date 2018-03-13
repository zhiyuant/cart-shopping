<template>
  <div>
    <header>
      <ul>
        <li><router-link to="/index/home">首页</router-link></li>
        <li><router-link to="/index/cart">购物车</router-link></li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  header{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    border-bottom: 1px solid transparent;
    ul{
      display: flex;
      li{
        width: 96px;
        text-align: center;
        font-size: 14px;
        line-height: 60px;
        a{
          color: black;
        }
      }
    }
  }
</style>
