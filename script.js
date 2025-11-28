const arrow = document.getElementById("arrow");
const shootBtn = document.getElementById("shootBtn");

shootBtn.onclick = () => {
    // Reset arrow position
    arrow.style.left = "90px";

    // Wait a tiny bit, then shoot
    setTimeout(() => {
        arrow.style.left = "80vw";
    }, 50);
};
