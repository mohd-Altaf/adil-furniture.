const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });


//     function sendWhatsAppMessage(event, phone, img, name, price) {
//     event.preventDefault();
//     const message = `Hello, I am interested in this product:%0A
// *${name}*%0A
// Price: ${price}%0A
// Image: ${window.location.origin}/${img}`;
    
//     const url = `https://wa.me/${phone}?text=${message}`;
//     window.open(url, '_blank');
//   }
 


  function sendWhatsApp(button) {
  // WhatsApp number (without + or spaces)
  const phone = "919959334110"; 

  // Find product details
  const product = button.closest(".product");
  const img = product.querySelector("img").src;
  const name = product.querySelector("h3").innerText;
  const price = product.querySelector("p").innerText;

  // Encode message for WhatsApp
  const message = encodeURIComponent(
    `Hello, I am interested in this furniture:\n\n*Product:* ${name}\n*Price:* ${price}\n*Image:* ${img}`
  );

  // Open WhatsApp
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}