import zsshttp from '@/utli/zsshttp'
const module = {
    namespaced: true, //命名空间
    state: {
        cinemaList: [],
    },
    mutations: {
        setCinemaList(state, cinemaList) {
            state.cinemaList = cinemaList
        },
        clearCinemaList(state) { // 切换城市清空影院列表
            state.cinemaList = []
        }
    },
    actions: {
        getCinemaList(store, cityId) {
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
}
export default module