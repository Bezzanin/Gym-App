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
    static addUserData(name, uid) {
        firebase.database().ref().child('users').child(uid).set({
            name: name,
            gender,
            age, weight, height
        });
    }
    /* If you are working outside the first screem, you can just take uid from firebase without intervals */
    static addUserStatistics(statistics) {
        let uid = firebase.auth().currentUser.uid;
        let ref = firebase.database().ref().child('users').child(uid).child('statistics').update({
            statistics: statistics
        })
    }

    static sendFeedback(feedback) {
        let ref = firebase.database().ref().child('feedbacks');
        ref.push({
            feedback: feedback
        })
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
        firebase.auth().signOut();
    }

    static authState(callback){
        firebase.auth().onAuthStateChanged((user) => {
            callback(user);
        })
    }

    static getUserId(callback) {
        let uid = firebase.auth().currentUser.uid;
        callback(uid);
        return uid;
    }

    /**
     * 
     * Not Authentication
     */
    static getExercises(callback) {
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {

            callback(snap.val())
        })
        
    }
}

module.exports = Database;