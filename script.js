let inventory = [];
let editIndex = -1;
let currentRole = document.getElementById('role').value;

const totalDisplay = document.getElementById('inventory-total');

// Toggle dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

document.getElementById('role').addEventListener('change', function () {
  currentRole = this.value;
  renderTable();
  toggleFormAccess();
});

document.getElementById('inventory-form').addEventListener('submit', function (e) {
  e.preventDefault();
  if (currentRole === 'viewer') return;

  const item = {
    name: document.getElementById('name').value.trim(),
    quantity: parseInt(document.getElementById('quantity').value),
    price: parseFloat(document.getElementById('price').value),
    category: document.getElementById('category').value.trim(),
    description: document.getElementById('description').value.trim(),
    status: document.getElementById('status').value
  };

  if (editIndex >= 0) {
    inventory[editIndex] = item;
    editIndex = -1;
    showToast('Item updated successfully!');
  } else {
    inventory.push(item);
    showToast('Item added successfully!');
  }

  this.reset();
  renderTable();
});

document.getElementById('quantity').addEventListener('input', function () {
  const qty = parseInt(this.value);
  const statusSelect = document.getElementById('status');

  if (isNaN(qty)) return;

  if (qty > 5) {
    statusSelect.value = 'In Stock';
  } else if (qty > 0 && qty <= 5) {
    statusSelect.value = 'Low Stock';
  } else if (qty === 0) {
    statusSelect.value = 'Ordered';
  }
});

function renderTable(data = inventory) {
  const table = document.getElementById('inventory-table');
  table.innerHTML = "";
  let total = 0;

  data.forEach((item, index) => {
    const value = item.quantity * item.price;
    total += value;

    let actions = "";
    if (currentRole !== 'viewer') {
      actions += `<button class="action-btn" onclick="editItem(${index})">✏️</button>`;
    }
    if (currentRole === 'admin') {
      actions += `<button class="action-btn delete-btn" onclick="deleteItem(${index})">🗑️</button>`;
    }

    const row = `<tr>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>$${value.toFixed(2)}</td>
      <td>${item.category}</td>
      <td><span class="status ${item.status}">${item.status}</span></td>
      <td>${item.description}</td>
      <td>${actions}</td>
    </tr>`;
    table.innerHTML += row;
  });

  totalDisplay.textContent = `Total Inventory Value: $${total.toFixed(2)}`;
  toggleFormAccess();
  checkRestockAlerts();
}

function editItem(index) {
  if (currentRole === 'viewer') return;

  const item = inventory[index];
  document.getElementById('name').value = item.name;
  document.getElementById('quantity').value = item.quantity;
  document.getElementById('price').value = item.price;
  document.getElementById('category').value = item.category;
  document.getElementById('description').value = item.description;
  document.getElementById('status').value = item.status;
  editIndex = index;
}

function deleteItem(index) {
  if (currentRole !== 'admin') return;

  if (confirm("Are you sure you want to delete this item?")) {
    inventory.splice(index, 1);
    renderTable();
    showToast('Item deleted successfully!');
  }
}

document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = inventory.filter(item =>
    item.name.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.status.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );
  renderTable(filtered);
});

function toggleFormAccess() {
  const form = document.getElementById('inventory-form');
  const inputs = form.querySelectorAll('input, select, button');

  inputs.forEach(input => {
    input.disabled = currentRole === 'viewer';
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.style.display = currentRole === 'admin' ? 'inline-block' : 'none';
  });
}

function checkRestockAlerts() {
  const lowStockItems = inventory.filter(item =>
    item.quantity <= 3 && (item.status === 'Low Stock' || item.status === 'Ordered')
  );

  if (lowStockItems.length > 0) {
    const names = lowStockItems.map(i => i.name).join(', ');
    alert(`Restock Reminder: The following items are low or ordered and need attention:\n${names}`);
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

renderTable();
toggleFormAccess();
