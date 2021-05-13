import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    // store “全局的对象”
export default new Vuex.Store({
    state: {
        cityId: '310100',
        cityName: '上海',
        isTabbarShow: true,
    },

    //集中式修改状态-被监控了
    mutations: {
        changeCityName(state, name) {
            // console.log('2333')
            state.cityName = name
        },
        changeCityId(state, cityId) {
            state.cityId = cityId
        },
        hidden(state) {
            state.isTabbarShow = false
        },
        show(state) {
            state.isTabbarShow = true
        },
    }
})

//store 只是 存在内存中

//store配置 可选持久化