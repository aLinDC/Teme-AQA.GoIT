console.log(document);

const originalLog = console.log;
console.log = (...e) => {
  originalLog(...e); 
  document.getElementById("log").innerHTML += e.join(" ") + "<br />";
};


const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryCount = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryCount}`);
});
