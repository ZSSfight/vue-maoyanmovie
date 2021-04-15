<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
// import axios from 'axios'
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  },
  mouted () {
    // 1-maoyan
    // axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=7E9D21209B8311EBA8CC59DEC67D658B7A985CAAA0E6439A83C4605A52BAFE1B&optimus_risk_level=71&optimus_code=10').then(res => {
    //   console.log(res.data)
    // })
  }
}
</script>
