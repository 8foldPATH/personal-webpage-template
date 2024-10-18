// You can replace the contents of this file with your own JavaScript code.

// For a challenge, why not try adding the current year to the footer?
// It's currently hard-coded, but this way it would update automatically.
// You can use new Date().getFullYear() to get the current year.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

// script.js

// Update the footer year dynamically
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.getElementById("year");
    yearSpan.textContent = new Date().getFullYear();
  });
  
  console.log("Hello, World!");
  