document.getElementById("showHours").addEventListener("click", function () {
    const hours = document.getElementById("hours");
    hours.textContent = "Mo–Fr: 9–18 Uhr | Sa: 10–14 Uhr | So: geschlossen";
    hours.classList.remove("hidden");
  });
  