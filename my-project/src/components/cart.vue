<template>
<div class="cart_wrap">
  <div class="cart" v-show="cart.length!==0">
    <div class="panel-heading">
      <span class="glyphicon glyphicon-shopping-cart"></span> 购物车
      <span class="pull-right"><strong>总计：{{ TotalPrices }}</strong></span>
    </div>
    <div class="panel-body cart-detail">
      <table>
        <tr>
          <th>数量</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in cart" :key="index">
          <td>{{item.count}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <span class="remove" @click="removeItem(index)">删除</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="panel-footer">
      结算
    </div>
  </div>
  <div class="cart-empty" v-show="cart.length===0">
    <strong>购物车空空如也</strong>
  </div>
</div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      cart: state => state.cart
    }),
    TotalPrices () {
      let totalPrice = 0
      for (let i in this.cart) {
        totalPrice += this.cart[i].price
      }
      return totalPrice
    }
  },
  methods: {
    ...mapMutations(['removeItem'])
  }
}
</script>

<style lang="scss">
  .cart_wrap{
    padding: 20px;
    table{
      width: 100%;
      tr{
        line-height: 36px;
        border-bottom: darkgrey 1px solid;
        width: 100%;
        td,th{
          display: inline-block;
          width: 25%;
          text-align: center;
        }
      }
    }
    .cart-empty{
      text-align: center;
      line-height: 200px;
      width: 100%;
      margin: 0 auto;
      border: 1px red dashed;
    }
    .remove{
      display: inline-block;
      background: #dc3545;
      color: white;
      padding: 0 5px;
      line-height: 20px;
      border-radius: 3px;
    }
    .panel-footer{
      width: 200px;
      margin: 100px auto;
      cursor: pointer;
      background: #dc3545;
      text-align: center;
      color: white;
      line-height: 40px;
      border-radius: 4px;
    }
  }
</style>
