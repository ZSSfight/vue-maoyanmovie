<template>
    <div>
        <van-nav-bar
          title="影院"
          @click-left="handleLeft()"
        >
            <template #left>
                {{ $store.state.cityName }}<van-icon name="arrow-down" color="black"/>
            </template>
            <template #right>
                <van-icon name="search" size="21" color="grey"/>
            </template>
        </van-nav-bar>
        <div class="cinema" :style="{height:height}">
            <ul>
                <li v-for="data in datalist" :key="data.cinemaId">
                    <div>{{data.name}}</div>
                    <div class="address">{{data.address}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import zsshttp from '@/utli/zsshttp'
import BetterScroll from 'better-scroll'
import Vue from 'vue'
import { NavBar, Icon } from 'vant'

Vue.use(NavBar).use(Icon)
export default {
  data () {
    return {
      datalist: [],
      height: 0
    }
  },
  methods: {
    handleLeft () {
      this.$router.push('/city')
    }
  },
  mounted () {
    // 访问cityId，cityName

    // 获取视窗高度
    this.height = document.documentElement.clientHeight - 100 + 'px'
    zsshttp({
      url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=2928645`,
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.datalist = res.data.data.cinemas

      // 状态立即更改，但是dom异步更新
      this.$nextTick(() => {
        new BetterScroll('.cinema', {
          scrollbar: {
            fade: true
          }
        })
      })
    })
  }
}
</script>
<style lang="scss" scoped>
    .cinema{
        height: 300px;
        overflow: hidden;
        position: relative;//修正滚动条位置
    }
    li{
        padding: 5px;
        .address{
            font-size: 13px;
            color: grey;
        }
    }
</style>
