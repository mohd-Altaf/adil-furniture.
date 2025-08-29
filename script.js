// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
    toggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && menu.classList.contains('show')) {
        menu.classList.remove('show');
        toggle.textContent = "☰";
    }
});

// WhatsApp function
function sendWhatsApp(button) {
    const phone = "919959334110";
    const product = button.closest(".product");
    
    if (product) {
        const img = product.querySelector("img").src;
        const name = product.querySelector("h3").innerText;
        const price = product.querySelector(".product-price").innerText;
        const message = encodeURIComponent(
            `Hello, I am interested in this furniture:\n\n*Product:* ${name}\n*Price:* ${price}\n*Image:* ${img}`
        );
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    } else {
        const message = encodeURIComponent("Hello, I'm interested in your furniture products. Can you please send me more information?");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    }
}

// Add to cart functionality (for future implementation)
function addToCart(productId, productName, productPrice, productImage) {
    // This would be implemented when you add cart functionality
    console.log(`Added to cart: ${productName}`);
    alert(`${productName} has been added to your cart!`);
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});