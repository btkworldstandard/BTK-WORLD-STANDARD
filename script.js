
const language = document.getElementById("language");

language.addEventListener("change", function () {

if (this.value === "English") {
location.href = "index.html";
}

if (this.value === "Français") {
location.href = "index-fr.html";
}

if (this.value === "العربية") {
location.href = "index-ar.html";
}

if (this.value === "Español") {
location.href = "index-es.html";
}

}); 
