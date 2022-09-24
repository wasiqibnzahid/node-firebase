const express = require("express");
const app = express();

// App Port for details
const PORT = 9090;

// CORS to authenticate requests
const cors = require("cors");
var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200,
  methods: "GET, PUT",
};

// Firebase Initialization
// const { initializeApp } = require("firebase-admin/app");
const firebase = require("firebase-admin");
const key = require("./auth/attendance-key.json");
const { firestore } = require("firebase-admin");
firebase.initializeApp({
  credential: firebase.credential.cert(key),
});
app.use(cors(corsOptions));
app.listen(PORT);
app.use(express.json());

app.post("/abc", async (req, res) => {
  let user = req.body;
  await firebase.auth().createUser({
    email: 'adminsideemail@emaila.com',
    password: '123123',
    emailVerified: false,
    disabled: false,
  })

  res.status(200).send(req.body.password);
});
