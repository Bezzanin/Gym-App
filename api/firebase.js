
import * as firebase from "firebase";

class Firebase {

    /**
     * Initialises Firebase
     */



    static initialise() {
        firebase.initializeApp({
            apiKey: "APIKEY",
            authDomain: "APIKEY",
            databaseURL: "APIKEY",
            storageBucket: "APIKEY",
            messagingSenderId: "APIKEY"
        });
    }

}

module.exports = Firebase;