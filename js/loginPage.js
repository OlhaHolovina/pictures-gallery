document.getElementById('register-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const {auth} = getFirebaseModules();
    const user = await auth.createUserWithEmailAndPassword(email, password);
    console.log(user);
    // todo save it to the DB
  } catch (e){
    logError(e);
  }
});

document.getElementById('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const {auth} = getFirebaseModules();
    await auth.signInWithEmailAndPassword(email, password);
  } catch (e){
    logError(e);
  }
});
