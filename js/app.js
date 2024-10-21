import travelPoints from "./data/travelPoints.js";
import { applyFilters } from "./modules/applyFilters.js";
import { createCard } from "./modules/createCard.js";
import { createFilters } from "./modules/createFilters.js";
import { showSpinner, hideSpinner } from "./modules/spinner.js";

let currentIndex = 0; 
const loadSize = 6; 
let allLoaded = false;
let currentData = []; 

const fetchTravelPoints = async () => {
  try {
    const response = await fetch('./js/data/travelPoints.json');
    if (!response.ok) throw new Error('Error al cargar los puntos de viaje');
    const data = await response.json();
    currentData = [...data]; 
    loadCards(currentData);
  } catch (error) {
    Swal.fire({
      title: 'Error',
      text: 'Ocurrió un error al cargar los datos. Por favor, intenta nuevamente.',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }
};

// Función para cargar las tarjetas en grupos
const loadCards = (points) => {
  if (allLoaded || currentIndex >= currentData.length) return;

  showSpinner();
  setTimeout(() => {
    const end = currentIndex + loadSize;

    const pointsToShow = points.slice(currentIndex, end);

    if (pointsToShow.length === 0) {
      allLoaded = true; 
      hideSpinner();
      return;
    }

    pointsToShow.forEach(createCard);
    currentIndex = end;

    if (currentIndex >= currentData.length) {
      allLoaded = true;
    }

    hideSpinner();
  }, 1000);
};

// Función para manejar los filtros aplicados
const handleFilters = (filters) => {
  currentIndex = 0; 
  allLoaded = false; 
  document.getElementById('travel-list').innerHTML = ''; 
  currentData = applyFilters(travelPoints, filters) || [];
  loadCards();
};

createFilters(handleFilters);

fetchTravelPoints();

// Mostrar las primeras tarjetas inicialmente
loadCards(travelPoints);

// Detectar el scroll para cargar más tarjetas
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadCards(travelPoints);
  }
});