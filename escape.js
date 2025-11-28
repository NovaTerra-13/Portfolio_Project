//=======Escape Room Start=======//
const enterButton = document.getElementById("enter_button");
if (enterButton) {
    enterButton.addEventListener("click", () => {
        const entered = document.getElementById("start_password").value;
        const correct_password = "woodensword";

        if (entered === correct_password) {
            window.location.href = "room1_zelda.html";
        } else {
            document.getElementById("error_message").textContent =
                "Incorrect password. Try again.";
        }
    });
}

//Hints
const showHints = document.getElementById("show_hints");
if (showHints) {
    showHints.addEventListener("click", () => {
        document.getElementById("hints").style.display = "block";
    });
}

//=======Zelda Room=======//
const zeldaButton = document.getElementById("zelda_button");
if (zeldaButton) {
    zeldaButton.addEventListener("click", () => {
        const userKey = document.getElementById("zelda_key").value;
        const correctKey = "lostwoods";

        if (userKey === correctKey) {

            // Play sound
            const audio = document.getElementById("zelda_sound");
            audio.muted = false; 
            audio.play().catch(err => console.log("Audio blocked:", err));

            setTimeout(() => {
                window.location.href = "room2_lotr.html";
            }, 2000);

        } else {
            document.getElementById("zelda_error").textContent =
                "Incorrect key. Try again.";
        }
    });
}

//=======LOTR Room=======//
// LOGIC: Correct weapon
const bow_img = document.getElementById("weapon_bow");
if (bow_img) {
    bow_img.addEventListener("click", () => {
		document.getElementById("lotr_error").innerHTML = "";

        // Play sound
        const audio = document.getElementById("lotr_sound");
        if (audio) {
            audio.muted = false;
            audio.play().catch(err => console.log("Audio blocked:", err));
        }

        setTimeout(() => {
            window.location.href = "room3_sports.html";
        }, 7000);
    });
}

// LOGIC: Wrong weapon
const wrong_weapons = [
    document.getElementById("weapon_sword"),
    document.getElementById("weapon_axe"),
    document.getElementById("weapon_staff"),
	document.getElementById("weapon_longsword")
];

wrong_weapons.forEach(weapon => {
    if (weapon) {
        weapon.addEventListener("click", () => {
			alert("***That weapon does not guide your path. Try again.***");
        });
    }
});

//=======Sports Room=======//
let selectedTeam = null;
let matchesFound = 0;

// Click team name
const teamBoxes = document.querySelectorAll(".team_box");
teamBoxes.forEach(box => {
    box.addEventListener("click", () => {

        teamBoxes.forEach(b => b.classList.remove("selected"));

        selectedTeam = box.dataset.team;
        box.classList.add("selected");
    });
});

// Click logo
const logos = document.querySelectorAll(".logo_img");
logos.forEach(logo => {
    logo.addEventListener("click", () => {

        if (!selectedTeam) {
            alert("Select a team name first!");
            return;
        }

        if (logo.dataset.team === selectedTeam) {
            logo.classList.add("correct");
            document.querySelector(`[data-team='${selectedTeam}']`).classList.add("correct");

            logo.style.pointerEvents = "none";
            document.querySelector(`[data-team='${selectedTeam}']`).style.pointerEvents = "none";

            matchesFound++;
        } else {
            alert("Incorrect match. Try again.");
        }

        teamBoxes.forEach(b => b.classList.remove("selected"));
        selectedTeam = null;

        if (matchesFound === 8) {
            alert("Room cleared!");
            window.location.href = "escape_end.html";
        }
    });
});
