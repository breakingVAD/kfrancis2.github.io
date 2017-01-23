var config = {
  apiKey: "AIzaSyBrWgZydM8om1QiA2IXkGJeGqtEK_Y1ScE",
  authDomain: "breakingvad-77ea2.firebaseapp.com",
  databaseURL: "https://breakingvad-77ea2.firebaseio.com",
  storageBucket: "breakingvad-77ea2.appspot.com",
  messagingSenderId: "1080543855356"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user.email + " is logged in.");
    window.location.href = 'loggedin.html';
  } else {
    // No user is signed in.
    console.log("No one is currently logged in.");
  }
});


function signUp(email, password) {
  console.log("Sign Up");
  console.log(email);
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    user.sendEmailVerification().then(function() {
      alert('A verification email has been sent.')
    }, function(error) {
      alert(error.message);
    });
  }).catch(function(error) {
    // Handle Errors here
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}

function signIn(email, password) {
  console.log("Sign In");
  console.log(email);
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    console.log("Sign in failed.");
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });

}

function forgotPW(emailAddress) {
  if(!email) {
    alert('Please enter Email Address and re-click "Forgot password?" to get password recovery email.')
  }
  var auth = firebase.auth();
  auth.sendPasswordResetEmail(emailAddress).then(function() {
     alert('A password reset email has been sent to your email address.')
  }, function(error) {
    if(error.code == "auth/invalid-email") {
      alert('Please enter your Email Address and re-click "Forgot password?" to get password recovery email.');
    } else {
      alert(error.message);
    }
  });
}
