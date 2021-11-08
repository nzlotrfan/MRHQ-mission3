const express = require("express");
const app = express();
const cors = require("cors");
const DiscoveryV1 = require("ibm-watson/discovery/v1");
const { IamAuthenticator } = require("ibm-watson/auth");
app.use(express.urlencoded({ extended: true })); // we're telling the server to expect data inputed from an HTML form. But if we're sending the data via JSON then we don't actually need this line
app.use(express.json()); // tells the server to accept JSON data
app.use(cors()); // tells the server to accept incoming data from other locations

// DISCOVERY API START
const discovery = new DiscoveryV1({
  version: "2021-11-07",
  authenticator: new IamAuthenticator({
    apikey: "SNA6_eabsAwkXFlvf3Vf1jR--eKPUxvTta-wrDnUneGs",
  }),
  serviceUrl: "https://api.eu-gb.discovery.watson.cloud.ibm.com",
});

// when you want to access specific information inside of the request. All of the data that you send from the frontend ..
// .. will be accessible via req.body
app.post("/search", function (req, res) {
  console.log(req.body);
  // Watson Query data START
  const userQuery = req.body.searchString; // TEST Search parameters

  const queryParams = {
    environmentId: "d092ad96-249e-43af-a81d-8eef1a4aa9ab",
    collectionId: "18126044-5588-4be0-bf30-2fcbc87c45f3",
    query: userQuery,
  };

  discovery
    .query(queryParams)
    .then((queryResponse) => {
      // console.log(JSON.stringify(queryResponse, null, 2));
      const searchRes = JSON.stringify(queryResponse, null, 2);
      res.status(200).send(searchRes);
    })
    .catch((err) => console.log(err));

  // Watson Query data END
});

// FAILED 404 page
// app.get("*", function (req, res) {
//   res.send("This page doesn't exist yo!");
// });

app.listen(4000, function () {
  console.log("Node server is now running");
});
