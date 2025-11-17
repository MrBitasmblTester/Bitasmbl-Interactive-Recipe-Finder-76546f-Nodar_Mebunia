<template>
  <div class="detail container">
    <button @click="$router.back()">Back</button>
    <h2>{{ recipe.title }}</h2>
    <ul><li v-for="(s,i) in recipe.steps" :key="i">{{ s }}</li></ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { fetchRecipeById } from "../services/api"
const props = defineProps(["id"])
const recipe = ref({ title: "", steps: [] })
onMounted(async ()=> recipe.value = await fetchRecipeById(props.id))
</script>