<template>
  <div class="container">
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </div>
  
</template>