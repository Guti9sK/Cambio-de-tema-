const ChangeTheme = document.getElementById("btn-theme");

ChangeTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    ChangeTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    ChangeTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});
