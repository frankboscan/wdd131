function insertCurrentYear() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let count = localStorage.getItem('reviewCount') || 0;
  count = parseInt(count) + 1;
  localStorage.setItem('reviewCount', count);
  document.getElementById('reviewCount').textContent = `You have submitted ${count} review${count > 1 ? 's' : ''}.`;

  const params = new URLSearchParams(window.location.search);
  const details = document.getElementById('reviewDetails');
  const features = params.getAll('features').join(', ') || 'None selected';
  const review = params.get('review') || 'No review provided';
  const userName = params.get('userName') || 'Anonymous';
  details.innerHTML = `
    <p><strong>Product:</strong> ${params.get('product') || 'N/A'}</p>
    <p><strong>Rating:</strong> ${params.get('rating') || 'N/A'} stars</p>
    <p><strong>Installation Date:</strong> ${params.get('installDate') || 'N/A'}</p>
    <p><strong>Useful Features:</strong> ${features}</p>
    <p><strong>Written Review:</strong> ${review}</p>
    <p><strong>User Name:</strong> ${userName}</p>
  `;

  insertCurrentYear();
});
