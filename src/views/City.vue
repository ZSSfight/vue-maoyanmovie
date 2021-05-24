<template>
    <div>
        <van-index-bar :index-list="computedCityList" @select="handleSelect">
            <div v-for="data in cityList" :key="data.type">
                <van-index-anchor :index="data.type" />
                <van-cell :title="item.name" v-for="(item,index) in data.list" :key="index" @click="handleChangePage(item.name,item.cityId)"/>
            </div>
        </van-index-bar>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import zsshttp from '@/utli/zsshttp'
import Vue from 'vue'
import { IndexBar, IndexAnchor, Cell, Toast } from 'vant'

Vue.use(IndexBar).use(Cell)
Vue.use(IndexAnchor)

export default {
  data () {
    return {
      cityList: []
    }
  },
  computed: {
    computedCityList () {
      return this.cityList.map(item => item.type)
    }
  },
  mounted () {
    zsshttp({
      url: '/gateway?k=7923661',
      headers: {
        'X-Host': ' mall.film-ticket.city.list'
      }
    }).then(res => {
    //   console.log(res.data.data.cities)
      this.cityList = this.handleCityData(res.data.data.cities)
    })
  },
  methods: {
    ...mapMutations('CityModule',['changeCityName','changeCityId']),
    handleCityData (cities) {
      const letterArr = []
      const newCities = []
      for (let code = 65; code < 91; code++) {
        letterArr.push(String.fromCharCode(code))
      }
      letterArr.forEach((letter) => {
        const list = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)

        if (list.length > 0) {
          newCities.push({
            type: letter,
            list: list
          })
        }
      })
      //  console.log(newCities)
      return newCities
    },
    handleSelect (index) {
      console.log(index)

      Toast(index)
    },
    handleChangePage (name, cityId) {
      // cityId,cityName记录下来
      // this.$store.state.cityName = name

      // this.$store.commit('changeCityName', name)
      // this.$store.commit('changeCityId', cityId)
      this.changeCityName(name)
      this.changeCityId(cityId)
      this.$router.back()
    }
  }
}
</script>
<style>
.van-toast--html, .van-toast--text {
    min-width: 0;
    }
</style>
