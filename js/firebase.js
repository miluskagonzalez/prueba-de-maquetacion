firebase.initializeApp({
  apiKey: "AIzaSyBv8ZNj7VTdSkI0mMfIOQJTYBMNqjGOGZY",
  authDomain: "dashboard-test-36320.firebaseapp.com",
  databaseURL: "https://dashboard-test-36320.firebaseio.com",
  projectId: "dashboard-test-36320",
  storageBucket: "dashboard-test-36320.appspot.com",
  messagingSenderId: "723355594328"
});

const database = firebase.firestore();

database.settings({ timestampsInSnapshots: true });

const dashboardForm = document.getElementById('new-dashboard');
