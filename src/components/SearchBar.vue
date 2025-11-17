<template>
  <input class="search" v-model="query" @input="$emit('search',query)" placeholder="Search recipes or ingredients" />
</template>
<script setup>
import { ref } from "vue"
const emits = defineEmits(["search"])
const query = ref("")
</script>