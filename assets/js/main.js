const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

const dropdownItems = document.querySelectorAll(".dropdown__item");
console.log(dropdownItems);

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");
  dropdownButton.addEventListener("click", () => {
    const showDropdown = document.querySelector(".show-dropdown");

    toggleItem(item);

    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

const toggleItem = (item) => {
  const dropdownContainer = item.querySelector(".dropdown__container");
  console.log("larson");
  console.log(dropdownContainer);
  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

const mediaQuery = matchMedia("(min-width: 1118px)"),
  dropdownContainer = document.querySelectorAll(".dropdown__container");

const removeStyle = () => {
  if (mediaQuery.matches) {
    dropdownContainer.forEach((e) => {
      e.removeAttribute("style");
    });

    dropdownItems.forEach((e) => {
      e.classList.remove("show-dropdown");
    });
  }
};

addEventListener("resize", removeStyle);
//=====================================Input de recherche============================================================
const toggleSearch = (search, button) => {
  const searchBar = document.getElementById(search),
    searchButton = document.getElementById(button);

  searchButton.addEventListener("click", () => {
    searchBar.classList.toggle("show-search");
  });
};
toggleSearch("search-bar", "search-button");

//===============================Ajouter vos codes en dessous de cette ligne==========================================

console.log("Vos code commencerons juste Ici---");
//les Id des element qui sont deja creer son dispo dans le fichier HTML

//================================Le debut de notre API========================================================

// Déclaration de la variable que l'utilisateur devras entrée
let seach = "cat";

// L'API de la requete
let api_url ="https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&explaintext&titles=" + seach + "&formatversion=2";

// La fonction qui prend les choses importantes 
async function topLevelExtractsData(url) {
  const response = await fetch(url);
  var data = await response.json();
  let db = JSON.parse(JSON.stringify(data.query.pages));
  let t = db[0].extract;
  let s = t.split("\n\n\n");
  console.log(s[0]); 
}

// La fonction qui prend les autres choses
async function normalExtractsData(url){
  const response = await fetch(url);
  var data = await response.json();
  let db = JSON.parse(JSON.stringify(data.query.pages));
  let t = db[0].extract;
  let s = t.split("\n\n\n");
  console.log(s.slice(1, (s.length-3)).join("\n\n\n"));
}

// La fonction qui prend les accessoires
async function suplementExtractsData(url){
  const response = await fetch(url);
  var data = await response.json();
  let db = JSON.parse(JSON.stringify(data.query.pages));
  let t = db[0].extract;
  let s = t.split("\n\n\n");
  console.log(s.slice((s.length-2), (s.length)).join("\n\n\n"));
}

// https://en.wikipedia.org/w/index.php?curid=9228
// https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&explaintext&titles=Cat&formatversion=2&rvprop=content&rvslots=*
// https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&exchars=500&titles=Amazon&formatversion=2

topLevelExtractsData(api_url);
normalExtractsData(api_url);
suplementExtractsData(api_url);