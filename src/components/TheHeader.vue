<template>
  <header class="header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<style lang="sass" scoped>
.header
  padding-bottom: 20px
  margin-bottom: 40px
  border-bottom: 1px solid var(--color-border)

  h1
    font-size: 40px
    font-weight: 900

    &::first-letter
      font-size: 1.5em
      text-transform: uppercase
</style>