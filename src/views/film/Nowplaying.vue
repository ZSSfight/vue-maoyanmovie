<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.id" @click="handleClick(data.id)">
              <img :src="data.img | imgpath">
              <h3>{{data.nm}}</h3>
              <p>观众评：{{data.sc}}</p>
              <p style="overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;">主演：{{data.star | actorFilter}}</p>
              <p>{{data.showInfo}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
// Vue.filter('actorFilter',(data) => {
//   if(data === undefined){return '暂无主演'}
//   return data.map(item => item.star).join(' ')
// })
Vue.filter('actorFilter',(data) => {
return data.replace(/,/g," ")
})
Vue.filter('imgpath',function(data){
  return data.replace("w.h","128.180")
})
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=7E9D21209B8311EBA8CC59DEC67D658B7A985CAAA0E6439A83C4605A52BAFE1B&optimus_risk_level=71&optimus_code=10').then(res => {
      // console.log(res.data.movieList)
      this.datalist = res.data.movieList
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
