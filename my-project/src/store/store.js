import Vue from 'vue'
import Vuex from 'vuex'
// import {CHANGE_STYLE} from '../store/mutation-types'

Vue.use(Vuex)

// 该模块的初始状态
let store = new Vuex.Store({
  state: {
    count: 10,
    iPhone: [
      {
        name: 'Apple6',
        desc: '1200万像素视频',
        price: '5288 - 6888',
        isSelected: true,
        style: {
          '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
          '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
          '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
          '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
        },
        activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
        storage: {
          '16GB': 5288,
          '64GB': 6088,
          '128GB': 6888
        }
      },
      {
        name: 'Apple7',
        desc: '1500万像素视频',
        price: '6288 - 7888',
        isSelected: true,
        style: {
          '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
          '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
          '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
          '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
        },
        activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
        storage: {
          '16GB': 6288,
          '64GB': 7088,
          '128GB': 8888,
          '236GB': 12888
        }
      },
      {
        name: 'Apple8',
        desc: '1200万像素视频',
        price: '6288 - 7888',
        isSelected: true,
        style: {
          '银色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-silver-select-2015.png',
          '深空灰色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gray-select-2015.png',
          '金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-gold-select-2015.png',
          '玫瑰金色': 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png'
        },
        activeStyleUrl: 'http://o8yu724qs.bkt.clouddn.com/iphone6s-rosegold-select-2015.png',
        storage: {
          '16GB': 6288,
          '64GB': 7088,
          '128GB': 8888
        }
      }
    ],
    cart: []
  },
  mutations: {
    changeStyle (state, {value, index, style}) {
      console.log(value, index, style)
      state.iPhone[index].activeStyleUrl = value
    },
    changePrice (state, {value, index}) {
      console.log(value, index)
      state.iPhone[index].price = value
      state.iPhone[index].isSelected = false
    },
    addItem (state, index) { // 添加购物车
      const cartInfo = {
        name: state.iPhone[index].name,
        count: 1,
        price: state.iPhone[index].price
      }
      state.cart.push(cartInfo)
    },
    removeItem (state, index) {
      console.log(index)
      state.cart.splice(index, 1)
    }
  }
})

export default store
