dashboardForm.addEventListener('submit', event => {
  event.preventDefault();
  const { name, purchaseQuantity, purchaseIncrease, userQuantity, visitQuantity, date } = event.target;
  database.collection('dashboards').add({
    name: name.value,
    purchaseQuantity: purchaseQuantity.value,
    purchaseIncrease: purchaseIncrease.value,
    userQuantity: userQuantity.value,
    visitQuantity: visitQuantity.value,
    date: date.value,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  }).then(() => dashboardForm.reset())
})