const meetingCode = document.getElementById("meetingCode");
const newMeetingBtn = document.getElementById("newMeetingBtn");
const joinMeetingBtn = document.getElementById("joinMeetingBtn");
const signInBtn = document.getElementById("signInBtn");
const micBtn = document.getElementById("micBtn");
const cameraBtn = document.getElementById("cameraBtn");
const settingsBtn = document.getElementById("settingsBtn");

// Generate a demo meeting code
newMeetingBtn.addEventListener("click", function () {
    const code = Math.random().toString(36).substring(2, 10);

    meetingCode.value = code;
    meetingCode.focus();

    alert("Your demo meeting code is: " + code);
});

// Join a demo meeting
function joinMeeting() {
    const code = meetingCode.value.trim();

    if (code === "") {
        alert("Please enter a meeting code or link.");
        meetingCode.focus();
        return;
    }

    alert(
        "Meeting code: " + code +
        "\nA real meeting room will be added later."
    );
}

joinMeetingBtn.addEventListener("click", joinMeeting);

// Press Enter to join
meetingCode.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        joinMeeting();
    }
});

// Demo sign-in
signInBtn.addEventListener("click", function () {
    alert("Sign-in functionality will be added later.");
});

// Microphone toggle (visual demo only)
micBtn.addEventListener("click", function () {
    const isOff = micBtn.classList.toggle("off");

    micBtn.textContent = isOff ? "🔇" : "🎙️";

    micBtn.title = isOff
        ? "Turn microphone on"
        : "Turn microphone off";
});

// Camera toggle (visual demo only)
cameraBtn.addEventListener("click", function () {
    const isOff = cameraBtn.classList.toggle("off");

    cameraBtn.textContent = isOff ? "🚫" : "📹";

    cameraBtn.title = isOff
        ? "Turn camera on"
        : "Turn camera off";
});

// Demo settings
settingsBtn.addEventListener("click", function () {
    alert("Meeting settings will be added later.");
});
const themeToggle = document.getElementById("themeToggle");

// Restore the previously selected theme
const savedTheme = localStorage.getItem("meet-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

updateThemeButton();

// Toggle dark mode
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    localStorage.setItem("meet-theme", isDark ? "dark" : "light");

    updateThemeButton();
});