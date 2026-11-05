const headerTitle = document.querySelector("header h1");
if (headerTitle) {
    headerTitle.animate([
        { transform: "scale(0.8)", opacity: 0 },
        { transform: "scale(1.05)", opacity: 1, offset: 0.8 },
        { transform: "scale(1)", opacity: 1 },
    ], {
        duration: 1000,
        easing: "ease-in-out",
        fill: "forwards",
    });
}
export {};
