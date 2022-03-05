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
  return auth.currentUser;
}

// set timout to have enough time to save user
function redirectUser(url){
  setTimeout(() => {
    window.location.pathname = url;
  }, 2000)
}

function initHandlers(){
  document.addEventListener("DOMContentLoaded", function () {
    const {auth} = getFirebaseModules();
    const galleryPath = '/gallery.html';

    auth.onAuthStateChanged((user) => {
      if (user) {
        const pathname = window.location.pathname;
        const galleryPath = '/gallery.html';
        if (pathname !== galleryPath) {
          redirectUser(galleryPath);
        }
      } else {
        const pathname = window.location.pathname;
        if (pathname === galleryPath) {
          window.location.pathname = '/';
          redirectUser('/');
        }
      }
    });
  });

  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', async (event) => {
      try {
        const {auth} = getFirebaseModules();
        await auth.signOut();
      } catch (e){
        logError(e);
      }
    });
  }
}
