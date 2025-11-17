import { createRouter, createWebHistory } from "vue-router"
import RecipeList from "../views/RecipeList.vue"
import RecipeDetail from "../views/RecipeDetail.vue"
const routes = [
  { path: "/", name: "home", component: RecipeList },
  { path: "/recipe/:id", name: "detail", component: RecipeDetail, props: true }
]
export default createRouter({ history: createWebHistory(), routes })