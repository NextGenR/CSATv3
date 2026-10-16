/**
 * Progressive Web App (PWA) & Chrome Install Manager
 * Handles Service Worker registration and Chrome 'beforeinstallprompt' installation
 */

(function () {
  let deferredPrompt = null;

  function isInstalledOrDismissed() {
    try {
      return (
        localStorage.getItem("csat_pwa_dismissed") === "true" ||
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true
      );
    } catch (e) {
      return false;
    }
  }

  function hideAllInstallButtons() {
    const installBtns = document.querySelectorAll(".tg-btn-chrome-install, #btn-install-pwa, #btn-sidebar-install");
    installBtns.forEach((btn) => {
      btn.style.display = "none";
      if (btn.parentNode) {
        btn.remove();
      }
    });
  }

  // 1. If already installed or dismissed, remove buttons immediately
  if (isInstalledOrDismissed()) {
    hideAllInstallButtons();
    document.addEventListener("DOMContentLoaded", hideAllInstallButtons);
  }

  // 2. Register Service Worker
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

  // 3. Capture Chrome Install Prompt
  window.addEventListener("beforeinstallprompt", (e) => {
    // Prevent default mini-infobar on mobile Chrome
    e.preventDefault();
    deferredPrompt = e;
    console.log("[PWA] Chrome beforeinstallprompt captured!");

    if (isInstalledOrDismissed()) {
      hideAllInstallButtons();
      return;
    }

    // Show custom install buttons if present on page
    const installBtns = document.querySelectorAll(".tg-btn-chrome-install, #btn-install-pwa, #btn-sidebar-install");
    installBtns.forEach((btn) => {
      btn.style.display = "inline-flex";
      btn.classList.add("visible");
    });
  });

  // 4. Handle Install Button Click - Removes immediately on ONE click
  document.addEventListener("click", async (e) => {
    const installTrigger = e.target.closest(".tg-btn-chrome-install, #btn-install-pwa, #btn-sidebar-install");
    if (!installTrigger) return;

    // Save dismissal so it never displays again
    try {
      localStorage.setItem("csat_pwa_dismissed", "true");
    } catch (err) {}

    const promptObj = deferredPrompt;
    deferredPrompt = null;

    // Immediately hide and remove all install buttons upon the first click
    hideAllInstallButtons();

    if (promptObj) {
      try {
        promptObj.prompt();
        const { outcome } = await promptObj.userChoice;
        console.log(`[PWA] User response to install prompt: ${outcome}`);
      } catch (err) {
        console.warn("[PWA] Prompt error:", err);
      }
    } else {
      // If already installed or on desktop Chrome without prompt event
      alert("To install in Chrome: Click the three dots menu (⋮) at top right -> Select 'Save and Share' -> 'Install UPSC CSAT Daily 10'.");
    }
  });

  // 5. App Installed Confirmation
  window.addEventListener("appinstalled", () => {
    console.log("[PWA] UPSC CSAT Daily 10 app was successfully installed!");
    try {
      localStorage.setItem("csat_pwa_dismissed", "true");
    } catch (e) {}
    hideAllInstallButtons();
  });
})();
