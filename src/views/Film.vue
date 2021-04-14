<template>
    <div>
       <div style="height:300px;background:lightgreen">
           轮播
       </div>
        <film-header></film-header>
        <router-view></router-view>
    </div>
</template>

<script>
import filmHeader from './film/FilmHeader'
export default {
    components:{
        filmHeader
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
