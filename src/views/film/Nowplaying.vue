<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
              <img :src="data.poster">
              <h3>{{data.name}}</h3>
              <p style="overflow:hidden;
              text-overflow: ellipsos;
              white-space: nowrap;">
              主演：{{data.actors | actorFilter}}
              </p>
              <p>{{data.nation}} | {{data.runtime}} 分钟</p>
            </li>
        </ul>
    </div>
</template>

<script>
import zsshttp from '@/utli/zsshttp'
import Vue from 'vue'
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
      datalist: []
    }
  },
  mounted () {
    zsshttp({
      url: 'gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3605518',
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
    })
  },
  methods: {
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
  li{
    overflow: hidden;
    padding: 10px;
    img{
      float: left;
      width: 100px;
    }
  }
</style>
