function welcomeMessage() {
  if (window.location.pathname.includes("index.html")) {
    alert("Welcome to Ayodhya – the city of Lord Ram");
  }
}

function toggleDetails(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

function showFact() {
  document.getElementById("fact").innerText =
    "Ayodhya is one of the seven most sacred cities in Hinduism.";
}
function gotoplaces() {
  window.location.href = "places.html";
}

function validateForm() {
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("Please enter your name");
    return false;
  }
  alert("Thank you for contacting us!");
  return true;
}
document.addEventListener("DOMContentLoaded", function () {
  welcomeMessage();
});
document.getElementById("factButton").addEventListener("click", showFact);
document.getElementById("contactForm").addEventListener("submit", validateForm);                
document.getElementById("toggleHistory").addEventListener("click", function () {
  toggleDetails("historyDetails");
});
document.getElementById("toggleCulture").addEventListener("click", function () {
  toggleDetails("cultureDetails");
});
document.getElementById("toggleTourism").addEventListener("click", function () {
  toggleDetails("tourismDetails");
});
document.getElementById("toggleReligion").addEventListener("click", function () {
  toggleDetails("religionDetails");
}); 
// --- IGNORE ---
// End of js/script.js

  

