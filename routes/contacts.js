const router = require("express").Router();
let ContactModel = require("../models/contactsmodel");

router.get("/", async (req, res) => {
  try {
    const contacts = await ContactModel.find({});
    res.send(contacts);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/add", async (req, res) => {
  console.log(req.body);
  let body = req.body;
  try {
    const add = await ContactModel.create(body);
    res.send(add);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
