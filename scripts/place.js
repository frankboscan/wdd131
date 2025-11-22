document.addEventListener("DOMContentLoaded", () => {
  // Update copyright year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Update last modified date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("lastModified").textContent =
    new Date(document.lastModified).toLocaleDateString(undefined, options);
});
