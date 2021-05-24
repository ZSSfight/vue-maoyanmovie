<template>
    <div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check = 'false'
          >
            <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
              <img :src="data.poster">
              <h3>{{data.name}}</h3>
              <p style="overflow:hidden;
                        text-overflow: ellipsos;
                        white-space: nowrap;">
                  主演：{{data.actors | actorFilter}}
              </p>
              <p>{{data.nation}} | {{data.runtime}} 分钟</p>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
import zsshttp from '@/utli/zsshttp'
import Vue from 'vue'
import { mapState } from 'vuex'
import { List, Cell } from 'vant'

Vue.use(List).use(Cell) // 全局注册
Vue.filter('actorFilter', (actors) => {
  if (actors === undefined) return '暂无主演'
  return actors.map(item => item.name).join(' ')
})
// Vue.filter('actorFilter',(data) => {
// return data.replace(/,/g," ")
// })
// Vue.filter('imgpath',function(data){
//   return data.replace("w.h","128.180")
// })
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1, // 记录当前页数
      total: 0 // 数据长度
    }
  },
  mounted () {
    zsshttp({
      url: `/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=3605518`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  computed:{
...mapState('CityModule',['cityId'])
  },
  methods: {
    onLoad () {
      if (this.datalist.length === this.total && this.datalist.length !== 0) { // 避免详情滚动条到底后返回nowplaying界面，不可以底部加载的bug。
        this.finished = true
        return
      }
      console.log('到底了')
      // 1、ajax请求新页面数据；2、合并新数据到老数据；3、this.loading=false
      this.current++
      zsshttp({
        url: `/gateway?cityId=${this.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=3605518`,

        // url: '/gateway?cityId=310100&pageNum=' + this.current + '&pageSize=10&type=1&k=3605518',

        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
      })
    },
    handleClick (id) {
      this.$router.push(`/detail/${id}`) // 编程式导航
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  font-size: 15px;
  height: 30px;
  line-height: 30px;
}
  .van-cell{
    overflow: hidden;
    padding: 10px;
    img{
      float: left;
      width: 100px;
      margin-right: 5px;
    }
  }
</style>
