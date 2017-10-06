import * as firebase from "firebase";

class Database {
    static getExercises(callback) {
        let ref = firebase.database().ref().child('exercises');
        ref.on('value', (snap) => {

            callback(snap.val())
        })
        
    }
}

module.exports = Database;