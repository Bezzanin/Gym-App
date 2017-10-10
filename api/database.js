import * as firebase from "firebase";

class Database {
    /**
     * 
     * Authentication
     */

    static register(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage)
        });
    }

    static login(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage)
        });
    }

    static logout() {
        firebase.auth().signOut().catch((error) => {
            console.log(error.message)
        });
    }

    static authState(callback){
        firebase.auth().onAuthStateChanged((user) => {
            callback(user);
        })
    }
    static getExercises(callback) {
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {

            callback(snap.val())
        })
        
    }
}

module.exports = Database;