var express = require('express');
var router = express.Router();
var { MongoClient } = require("mongodb");

/* GET home page */
router.get('/', function(req, res) {
  res.render('index'); // your signup page
});

/* POST form submit */
router.post('/submit', async function(req, res) {
  console.log("Form Data:", req.body);

  try {
    const client = new MongoClient("mongodb://localhost:27017"); // no useUnifiedTopology
    await client.connect();
    console.log("MongoDB connected");

    const db = client.db("signupApp");      // choose database
    const collection = db.collection("users"); // choose collection

    const result = await collection.insertOne(req.body); // insert data
    console.log("Data inserted:", result.insertedId);

    await client.close();

    res.send("Signup Successful!"); // response to browser
  } catch (err) {
    console.error("MongoDB error:", err);
    res.send("Database operation failed");
  }
});

module.exports = router;
