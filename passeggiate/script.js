let map;
let markers = [];
let initialBounds;
let allVillages = []; // Store all villages for search

// List all your JSON files here
const jsonFiles = [
  "json/PC_1.json",
  "json/PC_2.json",
  "json/PC_3.json",
  "json/PC_4.json",
  "json/PC_5.json",
  "json/PC_6.json",
  "json/PC_7.json",
  "json/PC_8.json",
  // add more as needed
];

// Load all JSONs, then initialize map
Promise.all(jsonFiles.map(file =>
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch ${file}`);
      return res.json();
    })
    .catch(err => {
      console.error(`Error loading ${file}:`, err);
      return []; // fallback to empty list
    })
)).then(allData => {
  const merged = allData.flat();
  allVillages = merged; // Store for search
  initMap(merged);
  initSearch(); // Initialize search functionality
});

function initMap(villages) {
  map = L.map("map", {
    zoomControl: false  // Disable default zoom control
  }).setView([45.3, 7.6], 10); // Piedmont area

  // Add zoom control to top-right instead of top-left
  L.control.zoom({
    position: 'topright'
  }).addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>'
  }).addTo(map);

  let bounds = [];

  villages.forEach(v => {
    if (v.latitude && v.longitude) {
      const marker = L.marker([v.latitude, v.longitude], {
        title: v.village_name
      }).addTo(map);

      marker.on("click", () => {
        showVillage(v);
      });

      markers.push(marker);
      bounds.push([v.latitude, v.longitude]);
    }
  });

  if (bounds.length > 0) {
    initialBounds = L.latLngBounds(bounds);
    map.fitBounds(initialBounds, { maxZoom: 11 });
  }
  
  console.log(`Plotted ${markers.length} markers on the map`); // Debug
}

function showVillage(v) {
  const container = document.getElementById("village-content");

  let html = `
    <div style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 2px solid #ddd;
      margin-bottom: 1.5rem;
    ">
      <h2 style="margin: 0; font-size: 1.5rem; color: #2c2c2c;">${v.village_name}</h2>
      <div style="display: flex; gap: 0.75rem; align-items: center;">
        <a href="books/${v.source.replace('_cleaned', '')}.pdf" target="_blank" style="
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          border: 1px solid #2c2c2c;
          background: #f5f5f5;
          border-radius: 6px;
          color: #2c2c2c;
          text-decoration: none;
          transition: all 0.2s ease;
          white-space: nowrap;
        " onmouseover="this.style.background='#2c2c2c'; this.style.color='white';" 
           onmouseout="this.style.background='#f5f5f5'; this.style.color='#2c2c2c';">
          📖 Fonte originale
        </a>
        <button style="
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          border: 1px solid #2c2c2c;
          background: #f5f5f5;
          border-radius: 6px;
          color: #2c2c2c;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        " onmouseover="this.style.background='#2c2c2c'; this.style.color='white';" 
           onmouseout="this.style.background='#f5f5f5'; this.style.color='#2c2c2c';">
          Affidabilità: 🟡
        </button>
        <button onclick="closeVillagePanel()" style="
          background-color: #2c2c2c;
          color: white;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        " onmouseover="this.style.backgroundColor='#444'; this.style.transform='rotate(90deg)';"
           onmouseout="this.style.backgroundColor='#2c2c2c'; this.style.transform='rotate(0deg)';">✕</button>
      </div>
    </div>

    <pre style="
      white-space: pre-wrap;
      padding: 0;
      font-family: 'Merriweather', serif;
      font-size: 0.95rem;
      line-height: 1.7;
      margin: 0;
      color: #333;
    ">${v.village_text}</pre>
  `;

  if (v.notes) {
    html += `<div style="
      margin-top: 1.5rem;
      padding: 1rem;
      background: rgba(241, 241, 241, 0.8);
      border-left: 3px solid #2c2c2c;
      border-radius: 4px;
    ">
      <strong style="color: #2c2c2c;">Note:</strong> ${v.notes}
    </div>`;
  }

  container.innerHTML = html;

  const popup = document.getElementById("popup-panel");
  popup.classList.remove("hidden");
  popup.classList.add("visible");
  popup.scrollTop = 0;
}

// Close village popup panel
function closeVillagePanel() {
  const popup = document.getElementById("popup-panel");
  popup.classList.remove("visible");
  popup.classList.add("hidden");
}

// Close panel when clicking outside
document.addEventListener('click', function(e) {
  const popup = document.getElementById("popup-panel");
  if (e.target === popup) {
    closeVillagePanel();
  }
});

// Toggle info box collapse/expand
const infoBox = document.getElementById("info-box");
const infoToggle = document.getElementById("info-toggle");

infoToggle.addEventListener("click", function(e) {
  e.stopPropagation();
  infoBox.classList.toggle("collapsed");
});

// Show welcome popup on load
window.addEventListener("load", () => {
  const popup = document.getElementById("welcome-popup");
  const closeBtn = document.getElementById("close-popup");

  popup.style.display = "flex";

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Close welcome popup when clicking outside
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});

// Initialize search functionality
function initSearch() {
  const searchInput = document.getElementById('village-search');
  const suggestionsContainer = document.getElementById('search-suggestions');
  
  if (!searchInput || !suggestionsContainer) {
    console.error('Search elements not found');
    return;
  }
  
  searchInput.addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    
    if (query.length === 0) {
      suggestionsContainer.classList.add('hidden');
      return;
    }
    
    // Filter villages that match the query
    const matches = allVillages.filter(v => 
      v.village_name && v.village_name.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 suggestions
    
    if (matches.length === 0) {
      suggestionsContainer.classList.add('hidden');
      return;
    }
    
    // Display suggestions
    suggestionsContainer.innerHTML = '';
    matches.forEach(v => {
      const div = document.createElement('div');
      div.className = 'suggestion-item';
      div.textContent = v.village_name;
      div.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Clicked on suggestion:', v.village_name);
        focusOnVillage(v);
        searchInput.value = '';
        suggestionsContainer.classList.add('hidden');
      });
      suggestionsContainer.appendChild(div);
    });
    
    suggestionsContainer.classList.remove('hidden');
  });
  
  // Close suggestions when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
      suggestionsContainer.classList.add('hidden');
    }
  });
  
  console.log(`Search initialized with ${allVillages.length} villages`); // Debug
}

// Focus map on a specific village and show its info
function focusOnVillage(village) {
  console.log('Focusing on village:', village.village_name, village.latitude, village.longitude);
  
  if (village.latitude && village.longitude) {
    // Zoom to the village location
    map.setView([village.latitude, village.longitude], 14, {
      animate: true,
      duration: 1
    });
    
    // Show the village info panel after a brief delay for the zoom animation
    setTimeout(() => {
      showVillage(village);
    }, 500);
  } else {
    console.error('Village missing coordinates:', village);
  }
}