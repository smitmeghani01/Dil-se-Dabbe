import express from 'express';
import ejs from 'ejs';
import path from 'path';
import bodyParser from 'body-parser';
import { FirebaseApp, db } from './firebase.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

const app = express();
const dirname = path.resolve();
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.sendFile(dirname + "/loginPage.html");
})

app.get('/sellerRegPage',(req,res) => {
    res.sendFile(dirname + "/sellerRegPage.html");
})

const newUserRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return 1
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return 0
        });
} 

app.post('/:newAction',(req,res) => {
    var action = req.params;
    
    if (action === "newUser") { //New Buyer Registration
        var newName = req.body.newName;
        var phoneNo = req.body.newPhone;
        var email = req.body.newEmail;
        var password = req.body.newPassword;

        newUserRegistration(email,password);
        res.sendFile(dirname + "/loginPage.html");
    }
    else if(action==="existingUser"){ //Existing Buyer/Seller logins
        
    }
})

app.listen("3000",()=>{
    console.log("Server running on port 3000!")
})
