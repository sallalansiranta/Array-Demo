const input = document.querySelector('#numberInput');
const list = document.querySelector('#numberList');
const addButton = document.querySelector('#add');
const minButton = document.querySelector('#min');
const maxButton = document.querySelector('#max');
const avgButton = document.querySelector('#avg');
const sortButton = document.querySelector('#sort');

let numbers = [];

const addRow = () => {
  const newNumber = Number(input.value);
  if (!isNaN(newNumber) && input.value.trim() !== '') {
    numbers.push(newNumber);  // Lisätään uusi numero listaan
    input.value = '';  // Tyhjennetään syöttökenttä
    displayNumbers();  // Päivitetään numerolista
  } else {
    alert('Please enter a valid number');
  }
};

const displayNumbers = () => {
  list.innerHTML = '';  // Tyhjennetään lista ennen päivittämistä
  numbers.forEach(number => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    list.appendChild(listItem);  // Lisätään uusi numerorivi luetteloon
  });
};

// Tapahtumankuuntelija lisäyspainikkeelle
addButton.addEventListener('click', addRow);

// Tapahtumankuuntelija enter-painikkeelle
input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addRow();
  }
});

// Min-painikkeen toiminto
minButton.addEventListener('click', () => {
  if (numbers.length > 0) {
    const minNumber = Math.min(...numbers);
    alert(`Min: ${minNumber}`);
  } else {
    alert('No numbers added yet');
  }
});

// Max-painikkeen toiminto
maxButton.addEventListener('click', () => {
  if (numbers.length > 0) {
    const maxNumber = Math.max(...numbers);
    alert(`Max: ${maxNumber}`);
  } else {
    alert('No numbers added yet');
  }
});

// Avg-painikkeen toiminto
avgButton.addEventListener('click', () => {
  if (numbers.length > 0) {
    const avgNumber = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    alert(`Avg: ${avgNumber}`);
  } else {
    alert('No numbers added yet');
  }
});

// Sort-painikkeen toiminto
sortButton.addEventListener('click', () => {
  if (numbers.length > 0) {
    numbers.sort((a, b) => a - b);
    displayNumbers();  // Päivitetään näytettävä lista
  } else {
    alert('No numbers added yet');
  }
});
