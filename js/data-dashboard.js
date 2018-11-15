
  database.collection('dashboards').orderBy('timestamp', 'asc').onSnapshot((snapshot) => {
    let container = '';
    snapshot.forEach((doc) => {
     container += dataTemplate(doc.data())
    });
    document.getElementById('dashboard-container').innerHTML += container;
  });



const dataTemplate = ({name, date, purchaseQuantity, purchaseIncrease, userQuantity, visitQuantity}) => (
  ` <div class="d-flex row">
  <div class="col-12">
  <p class="font-weight-bold text-dark mb-0">${name}</p>
  <p>${date}</p>
  </div>
  <div class="col-12 col-sm-6 col-xl-3">
    <div class="card bg-info text-light rounded-0 border-0 mb-4">
      <div class="card-body pr-3 pl-3 pt-2 pb-2">
        <h2 class="font-weight-bold">${purchaseQuantity}</h2>
        <p class="card-text">Nuevas Compras</p>
      </div>
      <button class="card-footer btn border-0 text-light text-center p-1">
        <small>Más info<i class="fa fa-arrow-circle-right ml-1"></i></small>
      </button>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-xl-3">
    <div class="card bg-success text-light rounded-0 border-0 mb-4">
      <div class="card-body pr-3 pl-3 pt-2 pb-2">
        <h2 class="font-weight-bold d-flex align-items-end">${purchaseIncrease}<span class="text-med pb-3">%</span></h2>
        <p class="card-text">Incremento de Compras</p>
      </div>
      <button class="card-footer btn border-0 text-light text-center p-1">
        <small>Más info<i class="fa fa-arrow-circle-right ml-1"></i></small>
      </button>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-xl-3">
    <div class="card bg-warning rounded-0 border-0 mb-4">
      <div class="card-body text-light pr-3 pl-3 pt-2 pb-2">
        <h2 class="font-weight-bold">${userQuantity}</h2>
        <p class="card-text">Nuevos Usuarios</p>
      </div>
      <button class="card-footer btn border-0 text-light text-center p-1">
        <small>Más info<i class="fa fa-arrow-circle-right ml-1"></i></small>
      </button>
    </div>
  </div>
  <div class="col-12 col-sm-6 col-xl-3">
    <div class="card bg-danger text-light rounded-0 border-0 mb-4">
      <div class="card-body pr-3 pl-3 pt-2 pb-2">
        <h2 class="font-weight-bold">${visitQuantity}</h2>
        <p class="card-text">Nuevas Visitas</p>
      </div>
      <button class="card-footer btn border-0 text-light text-center p-1">
        <small>Más info<i class="fa fa-arrow-circle-right ml-1"></i></small>
      </button>
    </div>
  </div>
</div>`
);