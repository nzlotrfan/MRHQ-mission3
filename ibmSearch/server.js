/*
const DiscoveryV2 = require("ibm-watson/discovery/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const discovery = new DiscoveryV2({
  version: "{2021-10-30}",
  authenticator: new IamAuthenticator({
    apikey: "{AADtvKP67919k2JyciexWvSFLS5vIC8Cj-c6FaZ6YPlN}",
  }),
  serviceUrl: "https://api.eu-gb.discovery.watson.cloud.ibm.com",
  headers: {
    "X-Watson-Learning-Opt-Out": "true",
  },
});

discovery.method(params).catch((err) => {
  console.log("error:", err);
});

discovery
  .methodName(parameters)
  .then((response) => {
    console.log(response.headers);
  })
  .catch((err) => {
    console.log("error:", err);
  });
*/

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: true })); // we're telling the server to expect data inputed from an HTML form. But if we're sending the data via JSON then we don't actually need this line
app.use(express.json()); // tells the server to accept JSON data
app.use(cors()); // tells the server to accept incoming data from other locations

const user = {
  email: "hi@hi.com",
  password: "password123",
};

// when you want to access specific information inside of the request. All of the data that you send from the frontend ..
// .. will be accessible via req.body
app.post("/search", function (req, res) {
  console.log(req.body);
  if (req.body.email === user.email && req.body.password === user.password) {
    res.status(200).send("Search succeeded (sent from backend)");
  } else {
    res.status(401).send("Search failed (sent from backend)");
  }
});

// app.get("*", function (req, res) {
//   res.send("This page doesn't exist yo!");
// });

app.listen(4000, function () {
  console.log("Node server is now running");
});
