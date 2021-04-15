<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">111</div>
            <div class="swiper-slide">222</div>
            <div class="swiper-slide">333</div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
    mouted () {
        new Swiper ('.swiper-container')
    }
}
</script>