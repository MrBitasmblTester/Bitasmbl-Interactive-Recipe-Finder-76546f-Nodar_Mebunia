<template>
  <div class="container">
    <SearchBar @search="onSearch" />
    <div class="grid">
      <RecipeCard v-for="r in recipes" :key="r.id" :recipe="r" @view="viewRecipe" />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import SearchBar from "../components/SearchBar.vue"
import RecipeCard from "../components/RecipeCard.vue"
import { fetchRecipes } from "../services/api"
const recipes = ref([])
const router = useRouter()
const onSearch = async q => recipes.value = await fetchRecipes(q)
const viewRecipe = id => router.push({ name: "detail", params: { id } })
onMounted(()=> onSearch(""))
</script>