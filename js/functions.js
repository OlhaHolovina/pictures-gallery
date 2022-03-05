function getFirebaseModules(){
  const db = firebase.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();

  return {db, storage, auth };
}

function checkUser(){
  return new Promise((resolve, reject) => {
    document.addEventListener("DOMContentLoaded", function () {
      const {auth} = getFirebaseModules();

      auth.onAuthStateChanged((user) => {
        if (user) {
          window.location = '/gallery.html';
          resolve(user);
        } else {
          window.location = '/index.html';
          resolve(null);
        }
      })
    });
  })

}
