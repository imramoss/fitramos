let current = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 4000);
document.getElementById('filtro-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const categoria = document.getElementById('categoria').value;
    const tamanho = document.getElementById('tamanho').value;
    const cor = document.getElementById('cor').value;
  
    document.querySelectorAll('.produto').forEach(produto => {
      const matchCategoria = categoria === "todos" || produto.dataset.categoria === categoria;
      const matchTamanho = !tamanho || produto.dataset.tamanho === tamanho;
      const matchCor = !cor || produto.dataset.cor === cor;
  
      if (matchCategoria && matchTamanho && matchCor) {
        produto.style.display = 'block';
      } else {
        produto.style.display = 'none';
      }
    });
  });
  