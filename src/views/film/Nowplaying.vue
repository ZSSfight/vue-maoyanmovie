<template>
    <div>
        nowplaying
        <ul>
            <li v-for="data in datalist" :key="data.id" @click="handleClick(data.id)">
              <img :src="data.img"/>
              <h3>{{data.nm}}</h3>
              <p>{{data.star}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
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
  li{
    overflow: hidden;
    padding: 10px;
    img{
      float: left;
      width: 100px;
      height: 170px;
    }
  }
</style>
