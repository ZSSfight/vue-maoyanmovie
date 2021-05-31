<template>
    <div>
          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="black">
            <van-swipe-item v-for="(data,index) in imgList" :key="index">
              <van-image
                width="400px"
                height="200px"
                fit="cover"
                :src="data"
              />
            </van-swipe-item>
          </van-swipe>
        <film-header style="position:sticky;top:0;background:white;z-index:99">
        </film-header>
        <router-view></router-view>
    </div>


  <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
  </van-swipe>-->

</template>

<script>
import filmHeader from './film/FilmHeader'
import filmSwiper from './film/FilmSwiper'

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Image as VanImage } from 'vant';
Vue.use(VanImage);
Vue.use(Swipe);
Vue.use(SwipeItem);
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
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: whitesmoke;
    height: 200px;
  }
    *{
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
    }
</style>
