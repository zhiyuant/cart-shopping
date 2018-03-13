<template>
  <div class="container">
    <div v-for="(obj,index) in iPhone" :key="index" class="container_box">
      <div class="left_img">
        <img :src="obj.activeStyleUrl" alt="">
      </div>
      <div class="right_content">
        <ul class="list">
          <li>{{obj.name}}</li>
          <li><span>描述：</span>{{obj.desc}}</li>
          <li><span>价格：</span><span style="color: red;font-weight: bolder">{{obj.price}}</span></li>
          <li class="style">
          <span>外观：</span>
          <ul>
            <!--此时传的index下标是obj的下标-->
            <!--当changeStyle只需要向mutations传一个参数时：changeStyle(value),当需要传多个参数时要写成对象的形式changeStyle( {value, index})-->
          <li v-for="(value, style) in obj.style" :key="style" @click="changeStyle( {value, index, style})" :class="{active: iPhone[index].activeStyleUrl === value}">{{style}}</li>
          </ul>
          </li>
          <li class="style">
          <span>储存容量：</span>
          <ul>
          <li v-for="(value, price) in obj.storage" :key="price" @click="changePrice( {value, index})" :class="{active: iPhone[index].price === value}">{{price}}</li>
          </ul>
          </li>
        </ul>
        <hr>
        <button class="btn btn-danger btn-block" @click="addItem(index)" :disabled="iPhone[index].isSelected">
          加入购物车
        </button>
      </div>
    </div>
  </div><!-- ./container -->
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  data () {
    return {
      activeStyle: '',
      type: ''
    }
  },
  methods: {
    ...mapMutations(['changePrice', 'addItem', 'changeStyle'])
  },
  computed: {
    ...mapState({
      iPhone: state => state.iPhone
    })
  }
}
</script>

<style lang="scss">
  .active {
    background: red;
    color: white;
  }
  .container{
    width: 100%;
    margin: 0 auto;
    .container_box{
      width: 100%;
      display: flex;
      border-bottom: 1px solid gray;
      padding-bottom: 20px;
      >div{
        width: 50%;
      }
      .left_img{
        display: flex;
        align-items: center;
        img{
          width: 100%;
        }
      }
      .right_content{
        padding-left: 20px;
        padding-top: 20px;
        .title{
          font-size: 20px;
        }
        .list{
          li{
            font-size: 14px;
            line-height: 40px;
          }
          .style{
            ul{
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              li{
                line-height: 26px;
                width: 70px;
                text-align: center;
                border: 2px solid #eee;
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
