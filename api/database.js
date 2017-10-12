import * as firebase from "firebase";
var _ = require('lodash');

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
        // First We Create an empty all Exercises Variable
        let allExercises = ''
        // Now we fill our variable with the exercises from database
        ref.on('value', (snap) => {
            allExercises = Object.values(snap.val())
        })
        // Here We create an array from our exercises list coming from programs
        let programExercises = exercisesID.split(",")
        
        // Here We use 'map' function to apply filter for each element of programExercises Array
        let filteredList = programExercises.map((pExercise) => {
            // The map function returns only one element of the array and applyes filter to it
            let result = allExercises.filter((exercise) => {
                // Here the pExercise is the one element of programExercises array compared to allExercises id's
                return exercise.id === pExercise
            })
            //After Each filter we save the value to the 'result' variable
            return result
        })
        // Here we return the filtered list of exercises back to application
        // _.flatten Function is taken from Lodash library
        callback(_.flatten(filteredList))
    }
}

module.exports = Database;