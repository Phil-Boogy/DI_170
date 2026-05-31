import RecipeCollection from "../model/RecipeCollection";

export default class RecipeTemplate {
    collection: RecipeCollection
    container: HTMLDivElement
    constructor(collection: RecipeCollection) {
        this.collection = collection
        this.container = document.getElementById('recipeContainer') as HTMLDivElement
    }
    renderRecipe() {
        this.container.innerHTML = ""
        this.collection.recipes.forEach((recipe) => {
            const newCard = document.createElement("div")
            newCard.innerHTML = `
    <h2>${recipe.title}</h2>
    <ul>
        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <p>${recipe.instructions}</p>
    <button class="favorites">${recipe.isFavorite ? 'Unfavorite' : 'Add to Favorite'}</button>
    <button class="delete">Delete recipe</button>
`
            const deleteButton = newCard.querySelector('.delete')
            deleteButton!.addEventListener("click", () => {
                this.collection.removeRecipe(recipe.id)
                this.collection.saveToLocalStorage()
                this.renderRecipe()
            })
            const favButton = newCard.querySelector('.favorites')
            favButton!.addEventListener("click", () => {
                this.collection.toggleFavorite(recipe.id)
                this.collection.saveToLocalStorage()
                this.renderRecipe()
            })
            newCard.className = recipe.isFavorite ? 'card favorite' : 'card'
            this.container.append(newCard)
        })
    }
}
