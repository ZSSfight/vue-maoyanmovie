<template>
    <div class="swiper-container filmswiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination film-swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'
export default {
  mounted () {
    new Swiper('.filmswiper', {
      loop: true,
      autoplay: {
        delay: 2000
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
