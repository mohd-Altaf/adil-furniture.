const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("nav ul");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
      toggle.textContent = menu.classList.contains("show") ? "✖" : "☰";
    });


    function sendWhatsAppMessage(event, phone, img, name, price) {
    event.preventDefault();
    const message = `Hello, I am interested in this product:%0A
*${name}*%0A
Price: ${price}%0A
Image: ${window.location.origin}/${img}`;
    
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  }