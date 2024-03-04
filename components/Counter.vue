// Counter component
<script setup lang="ts">
defineProps<{
  title: string
}>()

const count = ref(0)
const increment = () => {
  count.value++
}
</script>
<template>
  <div class="az-counter">
    <h1 class="title">{{ title }}</h1>
    <p class="value">{{ count }}</p>
    <button class="button -increment" @click="increment">Click</button>
  </div>
</template>
