
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */
    static initialise() {
        firebase.initializeApp({
            apiKey: "INSERT YOUR KEY",
            authDomain: "INSERT YOUR KEY",
            databaseURL: "INSERT YOUR KEY",
            storageBucket: "INSERT YOUR KEY",
            messagingSenderId: "INSERT YOUR KEY"
        });
    }

}

module.exports = Firebase;