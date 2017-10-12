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
    static addUserData(name, weight, height) {
        let uid = firebase.auth().currentUser.uid;
        firebase.database().ref().child('users').child(uid).child('details').set({
            name: name,
            weight: weight,
            height: height
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

    static getPrograms(callback) {
        let ref = firebase.database().ref().child('programs');
        ref.on('value', (snap) => {
            callback(snap.val())
        })
    }

    static getUserData(uid, callback) {
        // let uid = firebase.auth().currentUser.uid;
        let path = firebase.database().ref().child('users').child(uid).child('details');
        path.once('value', (snap) => {
            callback(snap.val())
        })
    }

    static filterExercises(exercisesID, callback) {
        let ref = firebase.database().ref().child('exercises');
        let allExercises = ''
        ref.on('value', (snap) => {
            allExercises = Object.values(snap.val())
        })
        let programExercises = exercisesID.split(",")
        
        let filteredList = programExercises.map((pExercise) => {
            let result = allExercises.filter((exercise) => {
                return exercise.id === pExercise
            })

            return result
        })
        callback(filteredList)
    }
}

module.exports = Database;