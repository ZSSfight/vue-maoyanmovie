<template>
    <div>
        <film-swiper>
            <div class="swiper-slide" v-for="(data,index) in imgList" :key="index">
                <div :style="{backgroundImage:'url('+data+')'}" style="height:200px;background-size:cover"></div>
            </div>
        </film-swiper>
        <film-header style="position:sticky;top:0;background:white"></film-header>
        <router-view></router-view>
    </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'
export default {
  components: {
    filmHeader,
    filmSwiper
  },
  data () {
    return {
      imgList: ['https://p1.meituan.net/moviemachine/1d67ba8aec840c3e7ecdac6cdbd915c7293706.jpg@1l_1e_1c_128w_180h', 'https://p0.meituan.net/movie/c5c0f985b2f85e3920eb2ecd80d58d331466056.jpg@1l_1e_1c_128w_180h', 'https://p0.meituan.net/movie/e2ecb7beb8dadc9f07f2fad9820459f92275588.jpg@1l_1e_1c_128w_180h']
    }
  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
    }
</style>
