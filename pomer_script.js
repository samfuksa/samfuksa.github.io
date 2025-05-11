// Získání elementů ze stránky
const volumeSlider = document.getElementById('volumeSlider');
const ratioSlider = document.getElementById('ratioSlider');
const volumeValue = document.getElementById('volumeValue');
const ratioValue = document.getElementById('ratioValue');
const concAmount  = document.getElementById('concAmount');
const waterAmount = document.getElementById('waterAmount');

// Výchozí nastavení
volumeSlider.value = 1000;
ratioSlider.value = 5;
updateValues();

// Funkce pro přepočet a zobrazení
function updateValues() {
  const volume = Number(volumeSlider.value);
  const ratio  = Number(ratioSlider.value);

  // Výpočet: koncentrát = V / (1 + x), voda = V - koncentrát
  const conc = volume / (1 + ratio);
  const water = volume - conc;

  // Zobrazení hodnot
  volumeValue.textContent = volume.toLocaleString();
  ratioValue.textContent = ratio;
  concAmount.textContent  = conc.toFixed(2);
  waterAmount.textContent = water.toFixed(2);
}

// Události pro slidery
volumeSlider.addEventListener('input', updateValues);
ratioSlider.addEventListener('input', updateValues);