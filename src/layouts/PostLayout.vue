<template>
  <div class="post-layout">
    <div class="header-nav">
      <BaseButton @click="router.back()">Назад</BaseButton>
    </div>
    
    <PostView />

    <aside class="post-layout__aside">
      <h3>Читайте также</h3>
      <ul>
        <li>Пост 1</li>
        <li>Пост 2</li>
      </ul>
    </aside>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import PostView from '@/views/PostView.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style lang="sass" scoped>
.post-layout
  display: grid
  grid-template-rows: auto 1fr auto
  row-gap: 20px
  height: 100%

  &__aside
    margin-top: 40px

.header-nav
  display: flex
  justify-content: space-between
  align-items: center
</style>