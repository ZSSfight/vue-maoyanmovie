<template>
    <div>
        {{title}}
    </div>
</template>
<script>
export default {
  props: ['title']
}
</script>
<style lang="scss" scoped>
    div{
        position: fixed;
        z-index: 88;
        left: 0;
        top: 0;
        text-align: center;
        background-color: white;
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
</style>
