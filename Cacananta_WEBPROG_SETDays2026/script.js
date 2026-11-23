/* SET Days 2026 — three small enhancements. The page works without this file. */
document.documentElement.classList.add("js");

/* A. Mobile navigation */
(function () {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("site-nav");
    const header = document.querySelector(".site-header");

    toggle.hidden = false;

    function setOpen(open) {
        toggle.setAttribute("aria-expanded", String(open));
        header.classList.toggle("nav-open", open);
    }

    toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && header.classList.contains("nav-open")) {
            setOpen(false);
            toggle.focus();
        }
    });
})();

/* B. Schedule day filter: hides whole <tbody> day groups, so the table stays valid */
(function () {
    const filter = document.querySelector(".day-filter");
    const groups = document.querySelectorAll("#schedule tbody[data-day]");
    const buttons = filter.querySelectorAll("button");

    filter.hidden = false;

    filter.addEventListener("click", function (event) {
        const chosen = event.target.closest("button");
        if (!chosen) return;

        buttons.forEach(function (button) {
            button.setAttribute("aria-pressed", String(button === chosen));
        });
        groups.forEach(function (group) {
            group.hidden = chosen.dataset.day !== "all" && group.dataset.day !== chosen.dataset.day;
        });
    });
})();

/* C. Image map: scale the original coordinates to the displayed image size */
(function () {
    const image = document.querySelector("img[usemap]");
    const areas = document.querySelectorAll("map area");
    const original = Array.from(areas, function (area) {
        return area.coords.split(",").map(Number);
    });

    function scaleAreas() {
        const ratio = image.clientWidth / image.naturalWidth;
        areas.forEach(function (area, i) {
            area.coords = original[i].map(function (value) {
                return Math.round(value * ratio);
            }).join(",");
        });
    }

    window.addEventListener("resize", scaleAreas);
    if (image.complete) scaleAreas();
    else image.addEventListener("load", scaleAreas);
})();
