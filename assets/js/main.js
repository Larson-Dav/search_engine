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

// Déclaration de la variable que l'utilisateur devra entrer
async function extractData(url) {
  const response = await fetch(url);
  const data = await response.json();
  const page = data.query.pages[0];
  const extract = page.extract;
  const paragraphs = extract.split("\n\n\n");

  document.getElementById("topLevelResult").innerHTML = paragraphs[0];
  document.getElementById("normalResult").innerHTML = paragraphs
    .slice(1, -2)
    .join("\n\n\n");
  document.getElementById("supplementResult").innerHTML = paragraphs
    .slice(-2)
    .join("\n\n\n");
}

let search = "cat";
let api_url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&explaintext&titles=${search}&formatversion=2`;

extractData(api_url);
