window.addEventListener('DOMContentLoaded', () => {
  const cajas = document.querySelectorAll('.caja');
  const colors = ['blue', 'green', 'red', 'yellow', '#e944ff'];
  
  cajas.forEach((caja, index) => {
    caja.addEventListener('mouseover', () => {
      if (index < cajas.length - 1) {
        caja.style.backgroundColor = colors[index];
        caja.style.color = 'white';
      } else {
        cajas.forEach((c, i) => {
          if (i < cajas.length - 1) {
            c.style.backgroundColor = colors[i];
            c.style.color = 'white';
          }
        });
      }
    });
    
    caja.addEventListener('mouseout', () => {
      caja.style.backgroundColor = '#f0f0f0';
      caja.style.color = 'black';
    });
  });
});