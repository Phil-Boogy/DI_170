import RecipeItem from './RecipeItem'

export default class RecipeCollection {
    recipes: RecipeItem[];
    constructor() {
        this.recipes = []
    }
    addRecipe(recipe: RecipeItem) {
        this.recipes.push(recipe)
    }

    removeRecipe(id: string) {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id)
    }

    toggleFavorite(id: string) {
        const recipe = this.recipes.find(recipe => recipe.id === id);
        if (recipe) {
            recipe.isFavorite = !recipe.isFavorite
        }
    }
    saveToLocalStorage() {
        const recipes = JSON.stringify(this.recipes)
        localStorage.setItem("recipes", recipes)
    }

    loadFromLocalStorage() {
        let recipes: string | null
        recipes = localStorage.getItem("recipes")
        if (recipes) {
            const recipeItems: any[] = JSON.parse(recipes)
            for (const item of recipeItems) {
                this.recipes.push(new RecipeItem(item.title, item.ingredients, item.instructions, item.id, item.isFavorite))
            }
        }
    }
}