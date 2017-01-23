var config = {
    apiKey: "AIzaSyBrWgZydM8om1QiA2IXkGJeGqtEK_Y1ScE",
    authDomain: "breakingvad-77ea2.firebaseapp.com",
    databaseURL: "https://breakingvad-77ea2.firebaseio.com",
    storageBucket: "breakingvad-77ea2.appspot.com",
    messagingSenderId: "1080543855356"
};
firebase.initializeApp(config);

function logout() {
    firebase.auth().signOut().then(function() {
        console.log("Sign-out successful");
        window.location.href = 'index.html'
    }, function(error) {
        console.log(error.message);
    });
}