/**
 * Progressive Web App (PWA) & Chrome Install Manager
 * Handles Service Worker registration and Chrome 'beforeinstallprompt' installation
 */

(function () {
  let deferredPrompt = null;

  // 1. Register Service Worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => {
          console.log("[PWA] Service Worker registered with scope:", reg.scope);
        })
        .catch((err) => {
          console.warn("[PWA] Service Worker registration failed:", err);
        });
    });
  }

  // 2. Capture Chrome Install Prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent default mini-infobar on mobile Chrome
    e.preventDefault();
    deferredPrompt = e;
    console.log("[PWA] Chrome beforeinstallprompt captured!");

    // Show custom install buttons if present on page
    const installBtns = document.querySelectorAll(".tg-btn-chrome-install, #btn-install-pwa");
    installBtns.forEach((btn) => {
      btn.style.display = "inline-flex";
      btn.classList.add("visible");
    });
  });

  // 3. Handle Install Button Click
  document.addEventListener("click", async (e) => {
    const installTrigger = e.target.closest(".tg-btn-chrome-install, #btn-install-pwa");
    if (!installTrigger) return;

    if (!deferredPrompt) {
      // If already installed or on desktop Chrome without prompt event yet
      alert("To install in Chrome: Click the three dots menu (⋮) at top right -> Select 'Save and Share' -> 'Install UPSC CSAT Daily 10'.");
      return;
    }

    // Show native Chrome install prompt
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`[PWA] User response to install prompt: ${outcome}`);

    if (outcome === "accepted") {
      const installBtns = document.querySelectorAll(".tg-btn-chrome-install, #btn-install-pwa");
      installBtns.forEach((btn) => (btn.style.display = "none"));
    }
    deferredPrompt = null;
  });

  // 4. App Installed Confirmation
  window.addEventListener("appinstalled", () => {
    console.log("[PWA] UPSC CSAT Daily 10 app was successfully installed!");
    const installBtns = document.querySelectorAll(".tg-btn-chrome-install, #btn-install-pwa");
    installBtns.forEach((btn) => (btn.style.display = "none"));
  });
})();
