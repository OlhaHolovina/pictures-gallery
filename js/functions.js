function logError(error) {
  alert(error.message);
  console.log(error);
}

function getFirebaseModules(){
  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();

  return {db, storage, auth };
}

function getUser(){
  const {auth} = getFirebaseModules();
}

function checkUser(){
  document.addEventListener("DOMContentLoaded", function () {
    const {auth} = getFirebaseModules();

    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log('no user');
      }
    })
  });
}
