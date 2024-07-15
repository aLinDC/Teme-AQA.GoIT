console.log(document);

const ingredients1 = document.getElementById("ingredients")
const newClass = document.createElement("li");
newClass.className = "item";
ingredients1.appendChild(newClass);
const item = document.querySelector(".item");
const newTitleList = document.createElement('h1')
newTitleList.textContent = "Ingredients"
item.appendChild(newTitleList);
const newIngredients = document.querySelector(".item"); 
const ingredients = ["Potatoes","Mushrooms", "Garlic","Tomatos","Herbs","Condiments"];
for (let ingredient of ingredients) {
    let newListItem= document.createElement('li')
    newListItem.textContent = ingredient;
    
    newIngredients.appendChild(newListItem);
  
}









    



