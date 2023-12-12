document.getElementById('btnCompra').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
  
    // Simplemente, para ejemplo, agregar información al modal
    const infoFragancias = document.getElementById('infoFragancias');
    infoFragancias.innerHTML = `
      <p><strong>Fragancia Principal:</strong> Elegancia Floral - 100 ml</p>
      <p><strong>Desodorante a Juego:</strong> Desodorante en barra - Coincide con Elegancia Floral - 50 g</p>
      <p><strong>Aceite Esencial Complementario:</strong> Toque de Serenidad - Aceite esencial de lavanda - 15 ml</p>
    `;
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  