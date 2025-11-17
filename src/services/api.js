export async function fetchRecipes(q=""){
  const url = "https://api.example.com/recipes?q="+encodeURIComponent(q)
  const res = await fetch(url)
  if(!res.ok) return []
  const data = await res.json()
  return data.results || data
}
export async function fetchRecipeById(id){
  const url = "https://api.example.com/recipes/"+encodeURIComponent(id)
  const res = await fetch(url)
  if(!res.ok) return {}
  return await res.json()
}