import RecipeCollection from "./model/RecipeCollection";
import RecipeTemplate from "./templates/RecipeTemplate";
import RecipeItem from "./model/RecipeItem";
import './style.css'

const recipeCollection = new RecipeCollection();
const recipeTemplate = new RecipeTemplate(recipeCollection);
const form = document.getElementById("recipeEntryForm") as HTMLFormElement
const recipeTitle = document.getElementById("recipeTitle") as HTMLInputElement;
const instructions = document.getElementById("instructions") as HTMLTextAreaElement;
const ingredients = document.getElementById("ingredients") as HTMLTextAreaElement;
const clearButton = document.getElementById("clearRecipesButton") as HTMLButtonElement
const container = document.getElementById('recipeContainer') as HTMLDivElement

function submitHandler(event: Event): void {
  event?.preventDefault();
  const newRecipe = new RecipeItem(recipeTitle.value, ingredients.value.split('\n')
    , instructions.value)

  recipeCollection.addRecipe(newRecipe)
  recipeCollection.saveToLocalStorage()
  recipeTemplate.renderRecipe()

  recipeTitle.value = ''
  ingredients.value = ''
  instructions.value = ''
}

function clearHandler() {
  container.innerHTML = ""
}

form.addEventListener("submit", submitHandler)
clearButton.addEventListener("click", clearHandler)


recipeCollection.loadFromLocalStorage();
recipeTemplate.renderRecipe();