// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger
const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.textContent = isOpen ? "X" : "☰";
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Brigham City Utah",
    location: "Brigham City, Utah, United States",
    dedicated: "2012, September, 23",
    area: 36000,
    imageUrl: "https://newsroom.churchofjesuschrist.org/media/orig/brigham-city-utah-temple-exterior5a.jpg"
  },
  {
    templeName: "Dallas Texas",
    location: "Dallas, Texas, United States",
    dedicated: "1984, October, 19",
    area: 44207,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
  },
  {
    templeName: "Provo Utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, February, 9",
    area: 128325,
    imageUrl: "https://www.thechurchnews.com/resizer/O7kmh9r4TNoxWoIu6MUgw3efQtk=/arc-photo-deseretnews/arc2-prod/public/A3SCHS7B7COECC3YLL5UZ34EVA.jpg"
  }
];

function displayTemples(templeList) {
  const templesContainer = document.getElementById("temples");
  templesContainer.innerHTML = ""; // Clear existing content
  templeList.forEach(temple => {
    const card = document.createElement("figure");
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";
    const name = document.createElement("h3");
    name.textContent = temple.templeName;
    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    const area = document.createElement("p");
    area.textContent = `Size: ${temple.area} sq ft`;
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    templesContainer.appendChild(card);
  });
}

// Initial display
displayTemples(temples);

// Filter event listeners
const links = document.querySelectorAll('#nav-links a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.textContent.trim();
    let filteredTemples;
    switch (filter) {
      case 'Home':
        filteredTemples = temples;
        break;
      case 'Old':
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0].trim()) < 1900);
        break;
      case 'New':
        filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0].trim()) > 2000);
        break;
      case 'Large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case 'Small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
    }
    displayTemples(filteredTemples);
  });
});
