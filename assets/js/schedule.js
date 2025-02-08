function showEvents(day) {
  document.querySelectorAll(".day-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".event-card").forEach(card => card.style.display = "none");

  document.querySelectorAll(`.day-${day}`).forEach(card => card.style.display = "block");
  document.querySelector(`.day-btn:nth-child(${day})`).classList.add("active");
}

// Show Day 1 events by default
showEvents(1);
