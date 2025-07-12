const correctDOB = "2004-08-03";
const surpriseBtn = document.getElementById("surpriseBtn");
const targetDate = new Date("2025-08-03T00:00:00");

function checkDOB() {
  const input = document.getElementById("dobInput").value;
  if (input === correctDOB) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("countdownSection").style.display = "flex";
  } else {
    window.location.href = "https://www.google.com";
  }
}

function updateCountdown() {
  const now = new Date();
  const timeDiff = targetDate - now;
  const container = document.getElementById("circleContainer");
  container.innerHTML = "";

  const seconds = Math.floor(timeDiff / 1000) % 60;
  const minutes = Math.floor(timeDiff / (1000 * 60)) % 60;
  const hours = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 30;
  const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44)) % 12;

  const data = [
    { label: "Months", value: months },
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds }
  ];

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "circle";
    div.innerHTML = `<div>${item.value}</div><div>${item.label}</div>`;
    container.appendChild(div);
  });

  const today = now.toISOString().split("T")[0];
  if (today === "2025-08-03") {
    surpriseBtn.disabled = false;
    surpriseBtn.classList.add("enabled");
  }
}

setInterval(updateCountdown, 1000);

surpriseBtn.onclick = () => {
  if (!surpriseBtn.disabled) {
    document.getElementById("countdownSection").style.display = "none";
    document.getElementById("btsSection").style.display = "flex";
  }
};

document.getElementById("seeLetterBtn").onclick = () => {
  document.getElementById("letterSection").style.display = "flex";
};
