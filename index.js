let seach = "cat"
let api_url =
  "https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&substring(0, 500)&explaintext&titles=" + seach + "&formatversion=2";
async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();
  let db = JSON.parse(JSON.stringify(data.query.pages));
  console.log(db);
}

// https://en.wikipedia.org/w/index.php?curid=9228
// https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&explaintext&titles=Cat&formatversion=2&rvprop=content&rvslots=*
// https://en.wikipedia.org//w/api.php?action=query&format=json&prop=extracts&exchars=500&titles=Amazon&formatversion=2

getapi(api_url);