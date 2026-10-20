const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle?.querySelector("span");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Přepnout na ${isDark ? "světlý" : "tmavý"} režim`);
  themeToggle.title = `Přepnout na ${isDark ? "světlý" : "tmavý"} režim`;
  themeIcon.textContent = isDark ? "☀" : "☾";

  if (themeColorMeta) {
    themeColorMeta.content = isDark ? "#222222" : "#fcfcfc";
  }

  try {
    localStorage.setItem("prestika-theme", theme);
  } catch (_) {}
}

setTheme(document.documentElement.dataset.theme === "dark");
themeToggle?.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme !== "dark");
});
