window.addEventListener("load", () => {
    const durationElement = document.querySelector(".timeLoad");
    if (durationElement) {
        const loadTime = performance.now();
        durationElement.textContent = loadTime.toFixed(1) + "mc";
    }
})