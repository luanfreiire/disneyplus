// App Disney //

// Abrir Menu Mobile //
btn_mobile = () => {
  let menu_mobile = document.getElementById("menu_mobile");
  menu_mobile.classList.toggle("hidden");
  menu_mobile.classList.toggle("flex");
};
// Fechar Menu Mobile //
let menu_mobile = document.getElementById("menu_mobile");
menu_mobile.addEventListener("click", () => {
  menu_mobile.classList.add("hidden");
  menu_mobile.classList.remove("flex");
});
