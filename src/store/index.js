import Vue from 'vue'
import Vuex from 'vuex'
import zsshttp from '@/utli/zsshttp'
Vue.use(Vuex)
// store “全局的对象”
export default new Vuex.Store({
  state: {
    cityId: '310100',
    cityName: '上海',
    isTabbarShow: true,

    cinemaList: []
  },

  // 集中式修改状态-被监控了
  mutations: {
    changeCityName (state, name) {
      // console.log('2333')
      state.cityName = name
    },
    changeCityId (state, cityId) {
      state.cityId = cityId
    },
    hidden (state) {
      state.isTabbarShow = false
    },
    show (state) {
      state.isTabbarShow = true
    },

    // 异步
    setCinemaList (state, cinemaList) {
      state.cinemaList = cinemaList
    },
    clearCinemaList (state) { // 切换城市清空影院列表
      state.cinemaList = []
    }
  },

  // 异步
  actions: {
    getCinemaList (store, cityId) {
      return zsshttp({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=2928645`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // this.datalist = res.data.data.cinemas
        store.commit('setCinemaList', res.data.data.cinemas)
      })
    }
  }
})

// store 只是 存在内存中

// store配置 可选持久化
