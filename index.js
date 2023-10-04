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