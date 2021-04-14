<template>
    <div>
        detail
    </div>
</template>
<script>
export default {
  mounted () {
    console.log('利用获取的id，ajax请求后端接口', this.$route.params.myid)
  }
}
</script>
