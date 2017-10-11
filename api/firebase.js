
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "AIzaSyBnLBI6wcLpBhjrjCqdXc7ZgNOAe4wZhcA",
            authDomain: "lapintest1.firebaseapp.com",
            databaseURL: "https://lapintest1.firebaseio.com",
            projectId: "lapintest1",
            storageBucket: "lapintest1.appspot.com",
            messagingSenderId: "744056805967"
        });
    }

}

module.exports = Firebase;