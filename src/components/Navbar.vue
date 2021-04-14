<template>
    <div>
        navbar--<button @click="handleClick">click</button>
        <slot></slot>
    </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$emit('myevent')
    }
  }
}
</script>
