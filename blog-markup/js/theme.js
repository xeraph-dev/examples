const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
let theme;
if (storedTheme === null) {
  localStorage.setItem("theme", prefersDark);
  theme = prefersDark;
} else {
  theme = storedTheme === "true";
}

if (theme) {
  document.documentElement.classList.add("dark");
}

document.addEventListener("DOMContentLoaded", () => {
  const changeTheme = document.querySelector("#change-theme");

  function updateThemeIcon(theme) {
    const changeThemeIcon = changeTheme.querySelector("iconify-icon");
    changeThemeIcon.setAttribute("icon", `tabler:${theme ? "sun" : "moon"}`);
    document.documentElement.style.colorScheme = theme ? "dark" : "light";
  }

  updateThemeIcon(localStorage.getItem("theme") === "true");

  changeTheme.addEventListener("click", () => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    let theme;

    if (storedTheme === null) {
      theme = prefersDark;
    } else {
      theme = storedTheme === "true";
    }

    localStorage.setItem("theme", !theme);
    if (theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    updateThemeIcon(!theme);
  });
});
