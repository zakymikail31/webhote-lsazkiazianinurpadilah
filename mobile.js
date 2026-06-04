function updateIOSTime() {
  const t = document.getElementById("ios-time");
  const now = new Date();
  let h = now.getHours().toString().padStart(2, "0");
  let m = now.getMinutes().toString().padStart(2, "0");
  t.textContent = `${h}:${m}`;
}

setInterval(updateIOSTime, 1000);
updateIOSTime();