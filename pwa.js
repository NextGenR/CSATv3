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

  // ==========================================================================
  // 6. Pull / Scroll Down To Refresh Page Engine (Mobile Touch & Mouse Drag)
  // ==========================================================================
  function initPullToRefresh() {
    if (window.parent !== window) return;

    let ptrBox = document.getElementById("tg-ptr-box");
    if (!ptrBox) {
      ptrBox = document.createElement("div");
      ptrBox.id = "tg-ptr-box";
      ptrBox.className = "tg-ptr-box";
      ptrBox.innerHTML = `
        <div class="tg-ptr-pill">
          <div class="tg-ptr-icon-wrap">
            <i class="fa-solid fa-arrow-down tg-ptr-icon" id="tg-ptr-icon"></i>
          </div>
          <span class="tg-ptr-text" id="tg-ptr-text">Pull down to refresh</span>
        </div>
      `;
      document.body.appendChild(ptrBox);
    }

    const iconElem = ptrBox.querySelector(".tg-ptr-icon");
    const textElem = ptrBox.querySelector(".tg-ptr-text");

    let startY = 0;
    let currentY = 0;
    let isTracking = false;
    let isRefreshing = false;
    let thresholdExceeded = false;
    const PULL_THRESHOLD = 68; // px
    const MAX_PULL = 90; // px

    function getScrollContainer() {
      const scrollable = document.querySelector(".tg-view-scroll") ||
                         document.querySelector(".guidelines-body") ||
                         document.getElementById("app-root");
      if (scrollable && scrollable.scrollHeight > scrollable.clientHeight) {
        return scrollable;
      }
      return window;
    }

    function isAtTop() {
      const target = getScrollContainer();
      if (target === window) {
        return (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) <= 2;
      }
      return target.scrollTop <= 2;
    }

    function onPointerStart(e) {
      if (isRefreshing) return;
      if (isAtTop()) {
        const point = e.touches ? e.touches[0] : e;
        startY = point.clientY;
        currentY = startY;
        isTracking = true;
        thresholdExceeded = false;
        ptrBox.classList.remove("tg-ptr-refreshing");
      }
    }

    function onPointerMove(e) {
      if (!isTracking || isRefreshing) return;
      const point = e.touches ? e.touches[0] : e;
      currentY = point.clientY;
      const deltaY = currentY - startY;

      if (deltaY > 4 && isAtTop()) {
        if (e.cancelable && e.touches) {
          e.preventDefault();
        }

        ptrBox.classList.add("tg-ptr-pulling");
        const distance = Math.min(MAX_PULL, deltaY * 0.44);
        const pullProgress = Math.min(1, distance / PULL_THRESHOLD);

        ptrBox.style.transform = `translate(-50%, ${distance}px)`;
        ptrBox.style.opacity = String(Math.min(1, distance / 28));

        if (distance >= PULL_THRESHOLD) {
          if (!thresholdExceeded) {
            thresholdExceeded = true;
            if (navigator.vibrate) {
              try { navigator.vibrate(10); } catch (v) {}
            }
          }
          if (iconElem) {
            iconElem.className = "fa-solid fa-arrow-up tg-ptr-icon";
            iconElem.style.transform = "rotate(0deg)";
          }
          if (textElem) textElem.textContent = "Release to refresh";
        } else {
          thresholdExceeded = false;
          if (iconElem) {
            iconElem.className = "fa-solid fa-arrow-down tg-ptr-icon";
            iconElem.style.transform = `rotate(${pullProgress * 180}deg)`;
          }
          if (textElem) textElem.textContent = "Pull down to refresh";
        }
      } else if (deltaY <= 0) {
        ptrBox.classList.remove("tg-ptr-pulling");
        ptrBox.style.transform = "translate(-50%, -80px)";
        ptrBox.style.opacity = "0";
      }
    }

    function onPointerEnd() {
      if (!isTracking || isRefreshing) return;
      isTracking = false;
      ptrBox.classList.remove("tg-ptr-pulling");

      const deltaY = currentY - startY;
      const distance = deltaY * 0.44;

      if (distance >= PULL_THRESHOLD && isAtTop()) {
        isRefreshing = true;
        ptrBox.classList.add("tg-ptr-refreshing");
        ptrBox.style.transform = "translate(-50%, 50px)";
        ptrBox.style.opacity = "1";

        if (iconElem) {
          iconElem.className = "fa-solid fa-circle-notch tg-ptr-icon";
          iconElem.style.transform = "";
        }
        if (textElem) textElem.textContent = "Refreshing CSAT Daily...";

        // If on quiz page during active test, prompt before reload
        const isQuizPage = window.location.pathname.includes("quiz.html");
        if (isQuizPage) {
          const hasUnfinishedTest = !!localStorage.getItem("csat_daily_test_state");
          if (hasUnfinishedTest && !confirm("Reload page? Your ongoing test progress will sync or restart.")) {
            resetPtr();
            return;
          }
        }

        setTimeout(() => {
          window.location.reload();
        }, 600);
      } else {
        resetPtr();
      }
    }

    function resetPtr() {
      isRefreshing = false;
      isTracking = false;
      thresholdExceeded = false;
      ptrBox.classList.remove("tg-ptr-refreshing", "tg-ptr-pulling");
      ptrBox.style.transform = "translate(-50%, -80px)";
      ptrBox.style.opacity = "0";
      if (iconElem) {
        iconElem.className = "fa-solid fa-arrow-down tg-ptr-icon";
        iconElem.style.transform = "rotate(0deg)";
      }
      if (textElem) textElem.textContent = "Pull down to refresh";
    }

    // Touch events for mobile
    window.addEventListener("touchstart", onPointerStart, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerEnd, { passive: true });
    window.addEventListener("touchcancel", resetPtr, { passive: true });

    // Mouse drag support for desktop/trackpads
    let isMouseDown = false;
    window.addEventListener("mousedown", (e) => {
      if (e.button === 0 && !e.target.closest("button, a, input, select, textarea, .tg-tile-btn")) {
        isMouseDown = true;
        onPointerStart(e);
      }
    });
    window.addEventListener("mousemove", (e) => {
      if (isMouseDown) onPointerMove(e);
    });
    window.addEventListener("mouseup", () => {
      if (isMouseDown) {
        isMouseDown = false;
        onPointerEnd();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPullToRefresh);
  } else {
    initPullToRefresh();
  }
})();

