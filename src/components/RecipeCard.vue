<template>
  <div class="card">
    <h3>{{ recipe.title }}</h3>
    <p v-if="recipe.summary">{{ recipe.summary }}</p>
    <button @click="$emit('view',recipe.id)">View</button>
  </div>
</template>
<script setup>
defineProps({ recipe: Object })
</script>