import themeSwitcher from "./lib/theme-switcher.js";
import router from "./routes.js";
import lendingAPis from "./api/lendings.mock.server.js";

//start the router
router.start();

//Initialize the mock server
lendingAPis();

function initializeThemeSwitcher() {
  themeSwitcher();
}

//setup the theme switcher
document.addEventListener("DOMContentLoaded", initializeThemeSwitcher);
