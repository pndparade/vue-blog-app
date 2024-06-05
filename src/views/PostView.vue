<template>
  <div class="post-wrapper">
    <div v-if="post">
      <TheHeader :title="post.title" />
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { IPost } from '@/types/post.types'
import TheHeader from '@/components/TheHeader.vue'
const post = ref<IPost>()
const route = useRoute()

const getPost = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(response => response.json())
    .then(data => post.value = data)
    .catch(err => {
      console.log(err)
    })
}

onMounted(() => {
  getPost();
});

</script>

<style lang="sass" scoped>
</style>