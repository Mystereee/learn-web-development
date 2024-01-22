// Sélectionner le bouton bx-menu
const bxMenu = document.querySelector(".bx-menu");

// Sélectionner l'élément de navigation
const nav = document.querySelector("nav");

// Ajouter un écouteur d'événement au clic sur le bouton bx-menu
bxMenu.addEventListener("click", () => {
  // Ajouter la classe "active" à l'élément de navigation
  nav.classList.toggle("active");
});
