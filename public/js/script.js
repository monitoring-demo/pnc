// script.js
document.addEventListener('DOMContentLoaded', function () {
  // Get the element with the id "alerttest"
  const element = document.getElementById('test');

  // Add a click event listener to the "alerttest" element
  element.addEventListener('click', () => {
    // Display an alert message when clicked
    alert(`It is working...`);
  });
});
