const cardContainerOfertas = document.querySelector('.cOfert');
const cardContainerPopular = document.querySelector('.popular1');
const cardContainerModal = document.querySelector('.Sugerencias');

const url = 'http://localhost:3000/categories/1/products';
const url2 = 'http://localhost:3000/categories/2/products';

//obtener productos de base de datos

const getProductsOfertas = async () => {
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  data.forEach((element) => {
    const { descuento, img, precio, conDescuento, nombre } = element;
    cardContainerOfertas.innerHTML += `
        <div class="card">
         <span class="porcentaje">${descuento}%dto.</span>
         <img src="${img}" alt="" />
          <span class="precio">$${precio}
          <span class="precioDescartado">
         $${conDescuento}</span>
         </span>
        <span class="descripcion">${nombre}</span>
        <a href="#modalContainer"><button type="button" class="btn Agregar">Agregar</button></button></a>
          </div>  `;
  });
};

const getProductsPopular = async () => {
  const respuesta = await fetch(url2);
  const data = await respuesta.json();
  data.forEach((element) => {
    const { img, precio, nombre } = element;
    cardContainerPopular.innerHTML += `
        <div class="card">
         <img src="${img}" alt="" />
          <span class="precio">$${precio}</span>
        <span class="descripcion">${nombre}</span>
        <a href="#modalContainer"><button type="button" class="btn Agregar">Agregar</button></button></a>
          </div>  `;
  });
};

const getProductsModal = async () => {
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  data.forEach((element) => {
    const { descuento, img, precio, conDescuento, nombre } = element;
    cardContainerModal.innerHTML += `
        <div class="card">
         <span class="porcentaje">${descuento}%dto.</span>
         <img src="${img}" alt="" />
          <span class="precio">$${precio}
          <span class="precioDescartado">
         $${conDescuento}</span>
         </span>
        <span class="descripcion">${nombre}</span>
      <button type="button" class="btn Agregar">Agregar</button>
          </div>  `;
  });
};

//abrir Modal
const modal = document.querySelector('.modalContainer');
const bgModal = document.querySelector('.bgModal');

const btnsclick = () => {
  cardContainerPopular.addEventListener('click', (e) => {
    e.preventDefault;

    bgModal.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
  });

  cardContainerOfertas.addEventListener('click', (e) => {
    e.preventDefault;
    bgModal.style.visibility = 'visible';
    modal.classList.toggle('modal-close');
  });
};

btnsclick();

//cerrar modal
const cerrarModal = document.querySelector('.close');

cerrarModal.addEventListener('click', (e) => {
  e.preventDefault();

  modal.classList.toggle('modal-close');
  setTimeout(() => {
    bgModal.style.visibility = 'hidden';
  }, 600);
});

window.addEventListener('click', (e) => {
  if (e.target == bgModal) {
    modal.classList.toggle('modal-close');
    setTimeout(() => {
      bgModal.style.visibility = 'hidden';
    }, 600);
  }
});

// abrir slideBar
const body = document.querySelector('.body');
const bgSlideBar = document.querySelector('.bgSlideBar');
const slideBar = document.querySelector('.slideBar');
const abrirBar = document.querySelector('.carShopIcon');

abrirBar.addEventListener('click', (e) => {
  e.preventDefault();
  bgSlideBar.style.display = 'flex';
  body.style.overflow = 'hidden';
  slideBar.style.transform = 'translateX(0%)';
});

//cerrar slideBar
const cerrarBar = document.querySelector('.slideBarC');

cerrarBar.addEventListener('click', (e) => {
  e.preventDefault();
  slideBar.style.transform = 'translateX(100%)';

  setTimeout(() => {
    body.style.overflow = 'scroll';
    bgSlideBar.style.display = 'none';
  }, 900);
});

window.addEventListener('click', (e) => {
  if (e.target == bgSlideBar) {
    slideBar.style.transform = 'translateX(100%)';
    setTimeout(() => {
      bgSlideBar.style.display = 'none';
    }, 600);
  }
});

//render cards
const renderProducts = () => {
  getProductsOfertas();
  getProductsPopular();
  getProductsModal();
};

renderProducts();
