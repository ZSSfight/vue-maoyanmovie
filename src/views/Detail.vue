<template>
  <v-touch @swiperight="onSwipeRight">
    <van-nav-bar left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div v-if="filminfo">
      <detail-header v-top :title='filminfo.name'></detail-header>
        <!-- <div :style="{background:'url('+filminfo.poster+')'}" style="height:200px;background-size:cover;background-position:center"></div> -->
          <van-image width="375px" height="200px" fit="cover" :src="filminfo.poster"/>
        <h3 id="title" class="info">{{filminfo.name}}--{{filminfo.filmType.name}}</h3>
        <div class="info">{{filminfo.category}}</div>
        <div class="info">{{filminfo.premiereAt}}</div>
        <div class="info">{{filminfo.nation}} | {{filminfo.runtime}}分钟</div>
        <div :class="isShow? '' : 'synopsis'" class="info">{{filminfo.synopsis}}</div>
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
                background-position:center;" @click="handlePreview(index)"></div>
            </div>
          </detail-swiper>
    </div>
    </v-touch>
</template>
<script>
import { mapMutations } from 'vuex'
import Vue from 'vue'
import detailHeader from './detail/DetailHeader'
import detailSwiper from './detail/DetailSwiper'
import { ImagePreview } from 'vant'
import zsshttp from '@/utli/zsshttp' // @表示指向src
import VueTouch from 'vue-touch'
Vue.use(VueTouch)
import { NavBar, Image as VanImage, Sticky } from 'vant';
Vue.use(NavBar).use(VanImage).use(Sticky);
// import moment from 'momoent'
// Vue.filter("dateFilter",(date) => {
//   //日期处理--moment
// return moment(date * 1000).format('YYYY-MM-DD')
// })
Vue.directive('top', {
  inserted (el) {
    el.style.display = 'block'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > 40) {
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
  methods: {
    ...mapMutations('TabbarModule',['show','hidden']),
    handlePreview (index) {
      ImagePreview({
        images: this.filminfo.photos,
        startPosition: index,
        loop: false,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    },
    onSwipeRight(){
      console.log('right');
      this.$router.back();
    },
    onClickLeft(){
      this.$router.back();
    }
  },
  components: {
    detailSwiper,
    detailHeader
  },
  mounted () {
    // 详情页面隐藏tabbar底部
    // this.$store.commit('hidden')

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
  },

  // 显示tabbar底部栏
  beforeDestroy () {
    // this.$store.commit('show')
  }
}
</script>
<style lang="scss" scoped>
  .synopsis{
    height: 50px;
    overflow: hidden;
  }
  .info{
    font-size: 14px;
    line-height: 25px;
    margin-left: 5px;
    margin-top: 5px;
  }
  #title{
    font-size: 20px;
  }
</style>
