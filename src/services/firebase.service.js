import firebase from "../context/firebase";

const db = firebase.child('blogs');
console.log(db.value);
class FirebaseService {
    get_all(){
        return db;
    }
}

export default FirebaseService;