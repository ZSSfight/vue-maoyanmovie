<template>
    <div v-if="filminfo">
      <detail-header v-top :title='filminfo.name'></detail-header>
        <div :style="{background:'url('+filminfo.poster+')'}" style="height:200px;background-size:cover;background-position:center"></div>
        <h3>{{filminfo.name}}--{{filminfo.filmType.name}}</h3>
        <div>{{filminfo.category}}</div>
        <div>{{filminfo.premiereAt}}</div>
        <div>{{filminfo.nation}} | {{filminfo.runtime}}分钟</div>
        <div :class="isShow? '' : 'synopsis'">{{filminfo.synopsis}}</div>
        <div style="text-align:center"><i class="iconfont" :class="isShow? 'icon-arrow-up-bold' : 'icon-arrow-down-bold'" @click="isShow=!isShow"></i></div>

        <h3>演职人员</h3>
        <detail-swiper :perslide='3' swiperclass='swiper-actors'>
          <div class="swiper-slide" v-for="(data,index) in filminfo.actors" :key="index">
            <img :src="data.avatarAddress">
            <div style="text-align:center">
              <div>{{data.name}}</div>
              <div>{{data.role}}</div>
            </div>
          </div>
        </detail-swiper>

          <h3>剧照</h3>
          <detail-swiper :perslide='2' swiperclass='swiper-photos'>
            <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
                <div :style="{background:'url('+data+')'}" style="height:100px;background-size:cover;
                background-position:center;"></div>
            </div>
          </detail-swiper>
    </div>
</template>
<script>
import Vue from 'vue'
import detailHeader from './detail/DetailHeader'
import detailSwiper from './detail/DetailSwiper'
import zsshttp from '@/utli/zsshttp' // @表示指向src
// import moment from 'momoent'
// Vue.filter("dateFilter",(date) => {
//   //日期处理--moment
// return moment(date * 1000).format('YYYY-MM-DD')
// })
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 50) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  data () {
    return {
      filminfo: null,
      isShow: false
    }
  },
  components: {
    detailSwiper,
    detailHeader
  },
  mounted () {
    // console.log('利用获取的id，ajax请求后端接口', this.$route.params.myid)

    zsshttp({
      url: `/gateway?filmId=${this.$route.params.myid}&k=6247852`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data.data.film)
      this.filminfo = res.data.data.film
    })
  }
}
</script>
<style lang="scss" scoped>
  .synopsis{
    height: 50px;
    overflow: hidden;
  }
</style>
