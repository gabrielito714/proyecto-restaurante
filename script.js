let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
    
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.classList.add('bump');
    setTimeout(() => cartIcon.classList.remove('bump'), 350);
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartCount.innerText = cart.length;
    
    cartItems.innerHTML = "";
    total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">No hay productos aún. Añade algo delicioso al carrito.</p>';
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span>${item.name}</span>
                    <span>$${item.price.toFixed(2)}</span>
                </div>
            `;
        });
    }
    
    totalPriceElement.innerText = total.toFixed(2);
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
}

function processOrder() {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    
    alert("🚀 ¡Pedido recibido! Estamos preparando tu comida para enviarla a tu domicilio.");
    cart = [];
    updateCartUI();
    toggleCart();
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}