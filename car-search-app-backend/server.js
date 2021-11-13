const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

// for Express
app.use(express.urlencoded({ extended: true })); // we're telling the server to expect data inputed from an HTML form. But if we're sending the data via JSON then we don't actually need this line
app.use(express.json()); // tells the server to accept JSON data
app.use(cors()); // tells the server to accept incoming data from other locations

// IBM Discovery
const DiscoveryV1 = require("ibm-watson/discovery/v1");
const { IamAuthenticator } = require("ibm-watson/auth");

const discovery = new DiscoveryV1({
  version: "2019-04-30",
  authenticator: new IamAuthenticator({
    apikey: process.env.APIK,
  }),
  serviceUrl: "https://api.eu-gb.discovery.watson.cloud.ibm.com",
});

// Server endpoints
app.get("/search", (req, res) => {
  console.log(`The search term was: "${req.query.searchString}"`);
  const userQuery = req.query.searchString; //  Search parameters
  const queryParams = {
    environmentId: process.env.ENVIROID,
    collectionId: process.env.COLLECTID,
    query: userQuery,
    count: 5,
  };

  discovery
    .query(queryParams)
    .then((queryResponse) => {
      console.log(JSON.stringify(queryResponse, null, 2));
      res.status(200).send(queryResponse);
    })
    .catch((err) => console.log(err));

  // Watson Query data END
});

// ALTERNATIVE SETUP

// FAILED 404 page
// app.get("*", function (req, res) {
//   res.send("This page doesn't exist yo!");
// });

app.listen(4000, function () {
  console.log("Node server is now running");
});
