<template>
    <div>
        <film-swiper></film-swiper>
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
    filmSwiper,
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
