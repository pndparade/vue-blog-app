<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">

</script>

<style lang="sass" scoped>
.button
  padding: 10px 20px
  font-family: inherit
  font-size: 18px
  border: 1px solid var(--color-border)
  border-radius: 8px
  background-color: var(--color-button-bg)
  color: #fff
  cursor: pointer
  transition: all 0.25s ease

  &:hover
    opacity: 0.8
</style>