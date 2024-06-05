<template>
  <TheHeader title="Blog App" />

  <p v-if="isLoading">Loading...</p>
  <ol v-if="posts.length" class="post-list">
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="{ name: 'posts', params: { id: post.id } }">{{ post.title }}</RouterLink>
    </li>
  </ol>
  
  <BaseButton 
    v-if="postsLimit" 
    class="load-more" 
    @click="showAllPosts"
  >Показать все</BaseButton>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import TheHeader from '@/components/TheHeader.vue';
import type { IPost } from '@/types/post.types'
import BaseButton from '@/components/BaseButton.vue';

const isLoading = ref(true)
const posts = ref<IPost[]>([])
const postsLimit = ref(10);

const getPosts = (limit?: number) => {
  const query = limit ? `?_limit=${limit}` : ''

  fetch(`https://jsonplaceholder.typicode.com/posts${query}`)
    .then(response => response.json())
    .then(data => posts.value = data)
    .catch(err => console.log(err))
    .finally(() => isLoading.value = false)
}

const showAllPosts = () => postsLimit.value = 0;

watch(
  postsLimit,
  (limit) => {
    getPosts(limit);
  }
)

onMounted(() => {
  getPosts(postsLimit.value);
});

</script>

<style lang="sass" scoped>
.post-list
  margin: 0
  padding-left: 20px
  display: grid
  row-gap: 15px

  a
    display: inline-block
    color: var(--color-text)

    &::first-letter
      text-transform: uppercase

.load-more
  margin-top: 40px
</style>